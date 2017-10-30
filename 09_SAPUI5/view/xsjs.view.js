/** 
 * This is a sample fo createContent function
 * the code is incomplete and should be merged 
 * with a standard SAPUI5 view (xsjs.view.js) 
 */

createContent: function(oController) {
	//Create ComboBox for BP Type
	var oComboBox1 = new sap.m.ComboBox("ComboBox1");
	oComboBox1.setTooltip("Type of Business Partner");
	oComboBox1.setEditable(true);
	oComboBox1.setValue("C");
	oComboBox1.setWidth("200px");

	var oItemCustomer = new sap.ui.core.ListItem("Customer");
	oItemCustomer.setText("C");
	oComboBox1.addItem(oItemCustomer);

	var oItemLead = new sap.ui.core.ListItem("Lead");
	oItemLead.setText("L");
	oComboBox1.addItem(oItemLead);

	var oItemVendor = new sap.ui.core.ListItem("Supplier");
	oItemVendor.setText("S");
	oComboBox1.addItem(oItemVendor);

	//Create ComboBox for top records
	var oComboBox2 = new sap.m.ComboBox("oComboBox2");
	oComboBox2.setTooltip("Records to load");
	oComboBox2.setEditable(true);
	oComboBox2.setValue("10");
	oComboBox2.setWidth("200px");

	var oItem = new sap.ui.core.ListItem("itemTop10");
	oItem.setText("10");
	oComboBox2.addItem(oItem);

	var oItem = new sap.ui.core.ListItem("itemTop50");
	oItem.setText("50");
	oComboBox2.addItem(oItem);

	oItem = new sap.ui.core.ListItem("itemTop100");
	oItem.setText("100");
	oComboBox2.addItem(oItem);

	//Create table and its columns
	var oTable = new sap.m.Table("idBPList", {
		inset: true,
		headerText: "List of Business Partners",
		headerDesign: sap.m.ListHeaderDesign.Standard,
		mode: sap.m.ListMode.None,
		includeItemInSelection: false,
		growing: true,
		growingThreshold: 5
	});

	var col1 = new sap.m.Column("xsCol1", {
		header: new sap.m.Label({
			text: "Code"
		})
	});
	oTable.addColumn(col1);

	var col2 = new sap.m.Column("xsCol2", {
		header: new sap.m.Label({
			text: "Name"
		})
	});
	oTable.addColumn(col2);

	var col3 = new sap.m.Column("xsCol3", {
		header: new sap.m.Label({
			text: "Type"
		})
	});
	oTable.addColumn(col3);

	var col4 = new sap.m.Column("xsCol4", {
		header: new sap.m.Label({
			text: "Balance"
		})
	});
	oTable.addColumn(col4);

	var colItems = new sap.m.ColumnListItem("colBP", {
		type: "Active"
	});

	var txtNAME = new sap.m.Text({
		text: "{CardCode}"
	});
	colItems.addCell(txtNAME);

	var txtNAME2 = new sap.m.Text({
		text: "{CardName}"
	});
	colItems.addCell(txtNAME2);

	var txtNAME3 = new sap.m.Text({
		text: "{CardType}"
	});
	colItems.addCell(txtNAME3);

	var txtNAME4 = new sap.m.Text({
		text: "{Balance}"
	});
	colItems.addCell(txtNAME4);

	//Create button to load the data into the table
	var buttonLoad = new sap.m.Button({
		text: "LOAD",
		width: "150px",
		press: function () {
			var srvcType = oComboBox1.getValue();
			var rows = oComboBox2.getValue();
			oController.onPressLoadXSJS(srvcType, rows);
		}
	});

	// create the xsjs page with a back button and a table
	var xsjsPage = new sap.m.Page({
		title: "Get list of Business Partners using XS JavaScript",
		showNavButton: true,
		navButtonPress: function () {
			// go back to the previous page
			app.back();
		},
		content: [
			oComboBox1,
			oComboBox2,
			buttonLoad,
			oTable
		]
	});

	return xsjsPage;
}
