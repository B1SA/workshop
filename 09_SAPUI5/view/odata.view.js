/** 
 * This is a sample fo createContent function
 * the code is incomplete and should be merged 
 * with a standard SAPUI5 view (odata.view.js) 
 */


createContent: function(oController) {
	//Create table and its columns
	var oTable = new sap.m.Table("idPrdList", {
		inset: true,
		headerText: "Sales by BP Group",
		headerDesign: sap.m.ListHeaderDesign.Standard,
		mode: sap.m.ListMode.None,
		includeItemInSelection: false,
		growing: true,
		growingThreshold: 5
	});

	var col1 = new sap.m.Column("col1", {
		header: new sap.m.Label({
			text: "Code"
		})
	});
	oTable.addColumn(col1);

	var col2 = new sap.m.Column("col2", {
		header: new sap.m.Label({
			text: "Name"
		})
	});
	oTable.addColumn(col2);

	var col3 = new sap.m.Column("col3", {
		header: new sap.m.Label({
			text: "Total Sales"
		})
	});
	oTable.addColumn(col3);

	var col4 = new sap.m.Column("col4", {
		header: new sap.m.Label({
			text: "Gross Profit"
		})
	});
	oTable.addColumn(col4);

	//Add the Binding property of each column
	var colItems = new sap.m.ColumnListItem("colItems", {
		type: "Active"
	});

	var txtNAME = new sap.m.Text("txtNAME", {
		text: "{GroupCode}"
	});
	colItems.addCell(txtNAME);

	var txtNAME2 = new sap.m.Text("txtNAME2", {
		text: "{GroupName}"
	});
	colItems.addCell(txtNAME2);

	var txtNAME3 = new sap.m.Text("txtNAME3", {
		text: "{DocTotal}"
	});
	colItems.addCell(txtNAME3);

	var txtNAME4 = new sap.m.Text("txtNAME4", {
		text: "{GrosProfit}"
	});
	colItems.addCell(txtNAME4);

	//Create button to load the data into the table
	var buttonLoad = new sap.m.Button({
		text: "LOAD",
		width: "150px",
		press: [oController.onPressLoadOdata, oController]
	});

	// create the second page with a back button
	var odataPage = new sap.m.Page({
		title: "Get sales by BP Group using XSODATA",
		showNavButton: true,
		navButtonPress: function () {
			// go back to the previous page
			app.back();
		},
		content: [
			buttonLoad,
			oTable
		]
	});

	return odataPage;
}