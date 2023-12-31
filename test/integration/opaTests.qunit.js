/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"my/Curriculum/MyCurriculum/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});