/*global QUnit*/

sap.ui.define([
	"projectMfcConsumer/project_mfc_consumer/controller/consumer.controller"
], function (Controller) {
	"use strict";

	QUnit.module("consumer Controller");

	QUnit.test("I should test the consumer controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
