// Developed by Davide Fauri (TU Eindhoven) - d.fauri@tue.nl

#ifndef ANALYZER_PROTOCOL_SBUS_SBUS_H
#define ANALYZER_PROTOCOL_SBUS_SBUS_H

#include "analyzer/protocol/udp/UDP.h"

#include "sbus_pac.h"

namespace analyzer { namespace sbus {

class Sbus_Analyzer

// TODO: check if inheriting from USPAnalyzer is correct
: public udp::UDP_Analyzer {

public:

	Sbus_Analyzer(Connection* conn);
	virtual ~Sbus_Analyzer();

	// Overriden from Analyzer.
	virtual void Done();
	
	// TODO: check if this function is right
	virtual void DeliverMessage(int len, const u_char* data, bool orig,
															uint64 seq);


	static analyzer::Analyzer* InstantiateAnalyzer(Connection* conn)
		{ return new Sbus_Analyzer(conn); }

protected:
	binpac::Sbus::Sbus_Conn* interp;
	
};

} } // namespace analyzer::* 

#endif