sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("UI.controller.odata", {
		
		onPressGoBack: function(){
			app.back();
		},
		
		onPressLoadOdata: function () {
			 // Create a model to Load the XSOData
		    var oModelBP = new sap.ui.model.odata.ODataModel(
		    		"/destinations/XSEngine/SOL2017/odata/b1.xsodata"
		    	);
		    
			// Load the Table and the columns we’ve created on the view
		    var oTable = sap.ui.getCore().byId("idPrdList");
		    var colItems = sap.ui.getCore().byId("colItems");
		    
		    // Attach the loaded model to the table 
		    oTable.setModel(oModelBP);
		    
		    // Bind the table to an specific oData service
		    oTable.bindAggregation("","/SalesByGroup",colItems);
		},

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf UI.view.odata
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf UI.view.odata
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf UI.view.odata
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf UI.view.odata
		 */
		//	onExit: function() {
		//
		//	}

	});

});