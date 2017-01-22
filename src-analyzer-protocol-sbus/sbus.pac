# Developed by Davide Fauri (TU Eindhoven) - d.fauri@tue.nl
#  - sbus-protocol.pac: describes the sbus protocol messages
#  - sbus-analyzer.pac: describes the sbus analyzer code


%include binpac.pac
%include bro.pac

%extern{
	#include "events.bif.h"
%}

analyzer Sbus withcontext {
	connection: Sbus_conn;
	flow:       Sbus_flow;
};

connection Sbus_conn(bro_analyzer: BroAnalyzer) {
	upflow   = Sbus_flow(true);
	downflow = Sbus_flow(false);
};

%include sbus-protocol.pac

flow Sbus_flow(is_orig: bool) {
	flowunit = Sbus_PDU(is_orig) withcontext(connection, this);
};

%include sbus-analyzer.pac