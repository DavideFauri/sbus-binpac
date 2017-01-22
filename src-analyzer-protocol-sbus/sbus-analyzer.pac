# Developed by Davide Fauri (TU Eindhoven) - d.fauri@tue.nl

# copypasted from Modbus, since I found no documentation on how to set up a SBus connection
refine connection SBus_Conn += {
  %member{
    // Fields used to determine if the protocol has been confirmed or not.
    bool confirmed;
    bool orig_pdu;
    bool resp_pdu;
    %}

  %init{
    confirmed = false;
    orig_pdu = false;
    resp_pdu = false;
    %}

  function SetPDU(is_orig: bool): bool
    %{
    if ( is_orig )
      orig_pdu = true;
    else
      resp_pdu = true;

    return true;
    %}

  function SetConfirmed(): bool
    %{
    confirmed = true;
    return true;
    %}

  function IsConfirmed(): bool
    %{
    return confirmed && orig_pdu && resp_pdu;
    %}
}

refine flow Sbus_Flow += {

  function deliver_Sbus_PDU(msg: Sbus_PDU): bool
    %{
    //# We will assume that if an entire PDU from both sides
    //# is successfully parsed then this is definitely modbus.
    connection()->SetPDU(${msg.is_orig});

    if ( ! connection()->IsConfirmed() )
      {
      connection()->SetConfirmed();
      connection()->bro_analyzer()->ProtocolConfirmation();
      }

    return true;
    %}
  
  function deliver_message(header: Sbus_Header): bool
  %{
  if ( ::sbus_message )
    {
      BifEvent::generate_modbus_message(connection()->bro_analyzer(),
                                        connection()->bro_analyzer()->Conn(),
                                        HeaderToBro(header),
                                        is_orig());    
    }

  return true;
  %}
};

#refine typeattr Sbus_PDU += &let {
# proc: bool = $context.flow.proc_sbus_message(this);
#};