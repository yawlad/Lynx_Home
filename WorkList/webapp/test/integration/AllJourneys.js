/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"zjblessons/WorkList/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"zjblessons/WorkList/test/integration/pages/Worklist",
	"zjblessons/WorkList/test/integration/pages/Object",
	"zjblessons/WorkList/test/integration/pages/NotFound",
	"zjblessons/WorkList/test/integration/pages/Browser",
	"zjblessons/WorkList/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "zjblessons.WorkList.view."
	});

	sap.ui.require([
		"zjblessons/WorkList/test/integration/WorklistJourney",
		"zjblessons/WorkList/test/integration/ObjectJourney",
		"zjblessons/WorkList/test/integration/NavigationJourney",
		"zjblessons/WorkList/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});