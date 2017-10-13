/** 
 * This is a sample fo onPressLoadOdata function
 * the code is incomplete and should be merged 
 * with a standard SAPUI5 controller (odata.controller.js) 
 */

onPressLoadOdata: function() {

	// Create a model to Load the XSOData
	// Destination cames from neo-app.json - Set on SAP CLoud Platform configuration
	var oModelBP = new sap.ui.model.odata.ODataModel("/destinations/hanab1/<yourProject>/<pathToXSodataFile>");

	// Load the Table and the columns we’ve created on the view
	var oTable = sap.ui.getCore().byId("idPrdList");
	var colItems = sap.ui.getCore().byId("colItems");

	// Attach the loaded model to the table 
	oTable.setModel(oModelBP);

	// Bind the table to an specific oData service
	oTable.bindItems("/SalesByGroup", colItems);
}