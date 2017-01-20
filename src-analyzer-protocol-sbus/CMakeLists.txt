# Developed by Davide Fauri (TU Eindhoven) - d.fauri@tue.nl

include(BroPlugin)

include_directories(BEFORE ${CMAKE_CURRENT_SOURCE_DIR} ${CMAKE_CURRENT_BINARY_DIR})

bro_plugin_begin(Bro Sbus)
	bro_plugin_cc(sbus.cc Plugin.cc)
	bro_plugin_bif(events.bif)
	bro_plugin_pac(sbus.pac sbus-analyzer.pac sbus-protocol.pac)
bro_plugin_end()