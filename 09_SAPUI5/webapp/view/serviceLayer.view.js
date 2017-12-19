sap.ui.jsview("UI.view.serviceLayer", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf UI.view.serviceLayer
	 */
	getControllerName: function() {
		return "UI.controller.serviceLayer";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf UI.view.serviceLayer
	 */
	createContent: function(oController) {
         var oTable = new sap.m.Table("idPrdListServiceLayer",{
             headerText: "{i18n>tableListofProducts}",
             growing: true,
             growingThreshold:5
         });
         
        var slCol1 = new sap.m.Column("slCol1", {header: new sap.m.Label({text:"{i18n>tableColumnHeaderCode}"})});
        oTable.addColumn(slCol1);
         
        var slCol2 = new sap.m.Column("slCol2", {header: new sap.m.Label({text:"{i18n>tableColumnHeaderName}"})});
        oTable.addColumn(slCol2);
         
        var slCol3 = new sap.m.Column("slCol3", {header: new sap.m.Label({text:"{i18n>tableColumnHeaderQuantity}"})});
        oTable.addColumn(slCol3);
    	  
        var slColItems = new sap.m.ColumnListItem("slColItems");
         
        var slTxtName1 = new sap.m.Text("slTxtName1", {text:"{ItemCode}"});
        slColItems.addCell(slTxtName1);
        var slTxtName2 = new sap.m.Text("slTxtName2", {text:"{ItemName}"});
        slColItems.addCell(slTxtName2);
        
        var slTxtName3 = new sap.m.Text("slTxtName3", {text:"{QuantityOnStock}"});
        slColItems.addCell(slTxtName3);

		var buttonLoad = new sap.m.Button({
        	text:"{i18n>buttonLoad}",
        	width:"150px",
        	press: [oController.onPressLoadServiceLayer, oController]
        });

        var serviceLayer = new sap.m.Page({
        	title: "{i18n>titleServiceLayer}",
        	showNavButton:true,
        	navButtonPress:[oController.onPressGoBack, oController],
        	content: [
					buttonLoad,
        			oTable
				]
         });
         
        return serviceLayer;
	}
});