# Developed by Davide Fauri (TU Eindhoven) - d.fauri@tue.nl
#  - sbus-protocol.pac: describes the sbus protocol messages
#  - sbus-analyzer.pac: describes the sbus analyzer code


%include binpac.pac
%include bro.pac

%extern{
	#include "events.bif.h"
%}

analyzer SBus withcontext {
	connection: SBus_conn;
	flow:       SBus_flow;
};

connection SBus_conn(bro_analyzer: BroAnalyzer) {
	upflow   = SBus_flow(true);
	downflow = SBus_flow(false);
};

%include sbus-protocol.pac

flow SBus_flow(is_orig: bool) {
	flowunit = SBus_PDU(is_orig) withcontext(connection, this);
};

%include sbus-analyzer.pac