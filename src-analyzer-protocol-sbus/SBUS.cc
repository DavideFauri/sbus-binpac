// Developed by Davide Fauri (TU Eindhoven) - d.fauri@tue.nl

#include "Sbus.h"

#include "events.bif.h"

using namespace analyzer::sbus;

Sbus_Analyzer::Sbus_Analyzer(Connection* c)	: tcp::TCP_ApplicationAnalyzer("SBUS", c)
	{
	interp = new binpac::Sbus::Sbus_Conn(this);
	}

Sbus_Analyzer::~Sbus_Analyzer()
	{
	delete interp;
	}

void Sbus_Analyzer::Done()
	{	
	Analyzer::Done();
	}

void Sbus_Analyzer::DeliverPacket(int len, const u_char* data, bool orig,
													   uint64 seq, const IP_Hdr* ip, int caplen)
	{
	Analyzer::DeliverPacket(len, data, orig, seq, ip, caplen);
	interp->NewData(orig, data, data + len);
	}
