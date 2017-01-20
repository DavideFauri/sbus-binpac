// Developed by Davide Fauri (TU Eindhoven) - d.fauri@tue.nl

#include "plugin/Plugin.h"

#include "Sbus.h"

namespace plugin {
namespace Bro_Sbus {

class Plugin : public plugin::Plugin {
public:
	plugin::Configuration Configure()
		{
		AddComponent(new ::analyzer::Component("SBUS",
		             ::analyzer::sbus::Sbus_Analyzer::Instantiate));

		plugin::Configuration config;
		config.name = "Bro::sbus";
		config.description = "Sbus analyzer";
		return config;
		}
} plugin;

}
}