sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("UI.controller.xsjs", {

		onPressGoBack: function(){
			app.back();
		},
		
		onPressLoadXSJS : function(srvcType, rows)
		{	
			var xsjsUrl = "/destinations/XSEngine/" +
			"SOL2017/xsjs/GetBPListSQL_Params.xsjs" + 
			"?bpType=" + srvcType + "&top=" + rows;
		
			//jQuery Call
			$.ajax({   
				url: xsjsUrl,   
				method: 'GET',   
				dataType: 'json',   
				success: this.onCompleteCall,   
				error: this.onErrorCall 
			});
		},

		onCompleteCall: function(result)
		{   
			// Load the Table and the columns we’ve created on the view
			var oTable = sap.ui.getCore().byId("idBPList");
		    var colItems = sap.ui.getCore().byId("colBP");
		    
		    // Create a model to Load the XSOData
			var oModelBP = new sap.ui.model.json.JSONModel();
			
			//Load result data set to the model
			oModelBP.setData(result);
			
		    // Attach the loaded model to the table 
			oTable.setModel(oModelBP);
			
			// Bind the table to an specific oData service
		    oTable.bindAggregation("items","/",colItems);
		
		},
		
		onErrorCall: function(jqXHR, textStatus, errorThrown)
		{   
			 $.sap.require("sap.m.MessageBox");
			  sap.m.MessageBox.show(
			      "Error calling XSJS Service", {
			          icon: sap.m.MessageBox.Icon.ERROR,
			          title: "Error",
			          onClose: function(oAction) { return }
			      }
			    );
		},
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf UI.view.xsjs
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf UI.view.xsjs
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf UI.view.xsjs
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf UI.view.xsjs
		 */
		//	onExit: function() {
		//
		//	}

	});

});