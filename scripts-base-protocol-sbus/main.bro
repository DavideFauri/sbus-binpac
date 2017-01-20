# Developed by Davide Fauri (TU Eindhoven) - d.fauri@tue.nl

module Sbus;

@load ./consts

export {
	redef enum Log::ID += { LOG };

	type Info: record {
		## Timestamp for when the event happened.
		ts:     time    &log;
		## Unique ID for the connection.
		uid:    string  &log;
		## The connection's 4-tuple of endpoint addresses/ports.
		id:     conn_id &log;
		## The name of the function message that was sent
		func:		string	&log &optional;
	};

	## Event that can be handled to access the Sbus record as it is sent on
	## to the loggin framework.
	global log_sbus: event(rec: Info);
}

const ports = { 5050/udp };
redef likely_server_ports += { ports };

event bro_init() &priority=5
	{
	Log::create_stream(Sbus::LOG, [$columns=Info, $ev=log_sbus, $path="sbus"]);
	Analyzer::register_for_ports(Analyzer::ANALYZER_SBUS, ports);
	}

event sbus_message(c: connection, headers: SbusHeaders, is_orig: bool) &priority=5
	{
	if ( ! c?$sbus )
		{
		c$sbus = [$ts=network_time(), $uid=c$uid, $id=c$id];
		}

	c$sbus$ts   = network_time();
	c$sbus$func = command_codes[headers$command_code];
	}

event sbus_message(c: connection, headers: SbusHeaders, is_orig: bool) &priority=-5
	{
	# Only log upon replies.
	if ( ! is_orig  )
		Log::write(LOG, c$sbus);
	}