jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"xxx/test/integration/NavigationJourneyPhone",
		"xxx/test/integration/NotFoundJourneyPhone",
		"xxx/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});