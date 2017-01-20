// Developed by Davide Fauri (TU Eindhoven) - d.fauri@tue.nl

#include "Sbus.h"

#include "events.bif.h"

using namespace analyzer::sbus;

Sbus_Analyzer::Sbus_Analyzer(Connection* c)
	: tcp::TCP_ApplicationAnalyzer("SBUS", c)
	{
	interp = new binpac::Sbus::Sbus_Conn(this);
	}

Sbus_Analyzer::~Sbus_Analyzer()
	{
	delete interp;
	}

void Sbus_Analyzer::Done()
	{
	
	tcp::TCP_ApplicationAnalyzer::Done();

	interp->FlowEOF(true);
	interp->FlowEOF(false);
	
	}

void Sbus_Analyzer::EndpointEOF(bool is_orig)
	{
	tcp::TCP_ApplicationAnalyzer::EndpointEOF(is_orig);
	interp->FlowEOF(is_orig);
	}

void Sbus_Analyzer::DeliverStream(int len, const u_char* data, bool orig)
	{
	tcp::TCP_ApplicationAnalyzer::DeliverStream(len, data, orig);
	interp->NewData(orig, data, data + len);
	}

void Sbus_Analyzer::Undelivered(uint64 seq, int len, bool orig)
	{
	tcp::TCP_ApplicationAnalyzer::Undelivered(seq, len, orig);
	interp->NewGap(orig, len);
	}
