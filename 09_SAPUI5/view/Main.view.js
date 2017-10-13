/** 
 * This is a sample fo createContent function
 * the code is incomplete and should be merged 
 * with a standard SAPUI5 view (main.view.js) 
 */


createContent: function(oController) {
	var oPage = new sap.m.Page({
		title: "SAPUI5 APP",
		content: [
				new sap.m.Button({
				text: "ODATA",
				width: "150px",
				press: function() {
					// navigate to odata page
					app.to("odataPage");
				}
			}),
			new sap.m.ToolbarSpacer(),
			new sap.m.Button({
				text: "XSJS",
				width: "150px",
				press: function() {
					// navigate to xsjs page
					app.to("xsjsPage");
				}
			}),
			new sap.m.ToolbarSpacer(),
			new sap.m.Button({
				text: "Service Layer",
				width: "150px",
				press: function() {
					// navigate to page3
					app.to("serviceLayerPage");
				}
			})
		]
	});
	
	var oBar = new sap.m.Bar({
		contentLeft: [new sap.m.Image({
			src: "https://www.sap.com/global/ui/images/global/sap-logo.gif",
			height: "30px"
		})],
		contentMiddle: [new sap.m.Label({
			text: "B1 App Demo based on SAP UI5",
			design: "Bold"
		})]
	});

	oPage.setCustomHeader(oBar);
	return oPage;
}
