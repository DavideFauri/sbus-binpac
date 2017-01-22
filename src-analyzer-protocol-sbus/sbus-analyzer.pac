# Developed by Davide Fauri (TU Eindhoven) - d.fauri@tue.nl

type SbusHeaders: record;

# taken from Modbus
%header{
  RecordVal* HeaderToBro(Sbus_Header *header);
%}
%code{
  RecordVal* HeaderToBro(Sbus_Header *header)
    {
      RecordVal* sbus_header = new RecordVal(SbusHeaders);
      sbus_header->Assign(0, new Val(header->ver(), TYPE_COUNT));
      sbus_header->Assign(1, new Val(header->pro(), TYPE_COUNT));
      sbus_header->Assign(2, new Val(header->seq(), TYPE_COUNT));
      sbus_header->Assign(3, new Val(header->att(), TYPE_COUNT));
      return sbus_header;
    }
%}



# copypasted from Modbus: functions for protocol confirmation
refine connection Sbus_Conn += {
  %member{
    //# Fields used to determine if the protocol has been confirmed or not.
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