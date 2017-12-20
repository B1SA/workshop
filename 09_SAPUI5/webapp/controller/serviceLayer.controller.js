sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("UI.controller.serviceLayer", {

		onInit: function() {
				var user = "manager";
				var pass = "1234";
				var comp = "SBODEMOUS";
				
				var jData = JSON.stringify({
					UserName: user,
					Password: pass,
					CompanyDB: comp
				});
				var serviceLayerLoginURL = "/destinations/ServiceLayer/Login";
				
				$.ajax({
					url: serviceLayerLoginURL,
					xhrFields: {withCredentials:true},
					data:jData,
					type:"POST",
					dataType:"json"
				});
			},
			
			onPressGoBack: function(){
				app.back();
			},
			
			onPressLoadServiceLayer: function(){
				var serviceLayerItemsURL = "/destinations/ServiceLayer/Items";
				$.ajax({
					url: serviceLayerItemsURL,
					xhrFields: {withCredentials:true},
					type:"GET",
					dataType:"json",
					success: this.onCompleteCall,
					error: this.onErrorCall
				});
			},
			
			onCompleteCall: function(result){
				var oTable = sap.ui.getCore().byId("idPrdListServiceLayer");
				var slColItems = sap.ui.getCore().byId("slColItems");
				var oModelItem = new sap.ui.model.json.JSONModel();
				
				oModelItem.setData(result);
				oTable.setModel(oModelItem);
				oTable.bindItems("/value", slColItems);
			},

			onErrorCall: function(jqXHR, textStatus, errorThrown){
				$.sap.require("sap.m.MessageBox");
				sap.m.MessageBox("Error calling Service Layer", {
					icon: sap.m.MessageBox.Icon.Error,
					title: "{i18n>error}",
					onClose:function(oAction){return;}
				}
				);
			}

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf UI.view.serviceLayer
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf UI.view.serviceLayer
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf UI.view.serviceLayer
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf UI.view.serviceLayer
		 */
		//	onExit: function() {
		//
		//	}

	});

});