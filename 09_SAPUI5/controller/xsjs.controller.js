onPressLoadXSJS: function(ctype, rows) {
	
	// Destination cames from neo-app.json - Set on SAP CLoud Platform configuration
	var xsjsUrl = "/destinations/hanab1/RO_WSGB/<yourProject>/<pathToXSJSFile>?bpType=" + 
															ctype + "&top=" + rows;
	//jQuery Call
	$.ajax({
		url: xsjsUrl,
		method: 'GET',
		dataType: 'json',
		success: this.onCompleteCall,
		error: this.onErrorCall
	});
},
	
onCompleteCall: function(result) {
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
	oTable.bindItems("/", colItems);

},

onErrorCall: function(jqXHR, textStatus, errorThrown) {
	$.sap.require("sap.m.MessageBox");
	sap.m.MessageBox.show(
		"Error in calling XSJS Service", {
			icon: sap.m.MessageBox.Icon.ERROR,
			title: "Error",
			onClose: function(oAction) {
				return;
			}
		}
	);
}