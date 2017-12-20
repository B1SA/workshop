sap.ui.jsview("UI.view.xsjs", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf UI.view.xsjs
	 */
	getControllerName: function() {
		return "UI.controller.xsjs";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf UI.view.xsjs
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
        
        var oItemVendor = new sap.ui.core.ListItem("Vendor");
        oItemVendor.setText("V");
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
            headerText: "{i18n>tableListofBP}",
            headerDesign: sap.m.ListHeaderDesign.Standard,
            growing: true,
            growingThreshold: 5
        });
        
        var col1 = new sap.m.Column("xsCol1", {
            header: new sap.m.Label({
                text: "{i18n>tableColumnHeaderCode}"
            })
        });
        oTable.addColumn(col1);
        
        var col2 = new sap.m.Column("xsCol2", {
            header: new sap.m.Label({
                text: "{i18n>tableColumnHeaderName}"
            })
        });
        oTable.addColumn(col2);
        
        var col3 = new sap.m.Column("xsCol3", {
            header: new sap.m.Label({
                text: "{i18n>tableColumnHeaderType}"
            })
        });
        oTable.addColumn(col3);
        
        var col4 = new sap.m.Column("xsCol4", {
            header: new sap.m.Label({
                text: "{i18n>tableColumnHeaderBalance}"
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
            text:  "{i18n>buttonLoad}",
            width: "150px",
            press: function() {
                var srvcType = oComboBox1.getValue();
                var rows = oComboBox2.getValue();
                oController.onPressLoadXSJS(srvcType, rows);
            }
        });
        
		// create the xsjs page with a back button and a table
        var xsjsPage = new sap.m.Page({
            title: "{i18n>titleXSJS}",
            showNavButton: true,
            navButtonPress:[oController.onPressGoBack, oController],
            content: [
                oComboBox1,
                oComboBox2,
                buttonLoad,
                oTable
            ]
        });
        
        return xsjsPage;
	}

});