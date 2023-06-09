sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"./Utils",
	"sap/ui/thirdparty/jquery"
], function(Controller, JSONModel, Utils, jQuery) {
	"use strict";

	return Controller.extend("tileproject.tileproject.controller.DnD", {

		onInit: function () {
			// set explored app's demo model on this sample
			this.oProductsModel = this.initSampleProductsModel();
			this.getView().setModel(this.oProductsModel);
			console.log("entrata in OnInt");
		},

		onExit: function() {
			this.oProductsModel.destroy();
			
		},

		 initSampleProductsModel: function() {
			var oModel = new JSONModel();

		 	jQuery.ajax({
		 		url: sap.ui.require.toUrl("tileproject/tileproject/model/Utenti.json"),
		 		dataType: "json"}).then(function(oData) {
		 		// prepare and initialize the rank property
		oData.utenti.forEach(function(oProduct) {
			oProduct.Rank = Utils.ranking.Initial;
			}, this);

				oModel.setData(oData); 
			});

			return oModel;
		},
		

		moveToAvailableProductsTable: function() {
			this.byId("UtentiSelezionati").getController().moveToAvailableProductsTable();
		},

		moveToSelectedProductsTable: function() {
			this.byId("Utenti").getController().moveToSelectedProductsTable();
		}
	});

});