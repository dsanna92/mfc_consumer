/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"projectMfcConsumer/project_mfc_consumer/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
