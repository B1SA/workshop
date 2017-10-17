jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 BusinessPartner in the list
// * All 3 BusinessPartner have at least one BPAddress

sap.ui.require([
	"sap/ui/test/Opa5",
	"xxx/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"xxx/test/integration/pages/App",
	"xxx/test/integration/pages/Browser",
	"xxx/test/integration/pages/Master",
	"xxx/test/integration/pages/Detail",
	"xxx/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "xxx.view."
	});

	sap.ui.require([
		"xxx/test/integration/MasterJourney",
		"xxx/test/integration/NavigationJourney",
		"xxx/test/integration/NotFoundJourney",
		"xxx/test/integration/BusyJourney",
		"xxx/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});