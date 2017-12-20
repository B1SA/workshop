sap.ui.jsview("UI.view.main", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controller.main
	 */
	getControllerName: function() {
		return "UI.controller.main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf controller.main
	 */
	createContent: function(oController) {				
		
		var buttonSL = new sap.m.Button({							
							text:"{i18n>buttonSL}",							
							width:"150px",							
							press:[oController.onPressGoToServiceLayer, oController]});				
		
		var buttonXSJS = new sap.m.Button({
							text:"{i18n>buttonXSJS}",
							width:"150px",
							press:[oController.onPressGoToXSJS, oController]});

		var buttonODATA = new sap.m.Button({
							text:"{i18n>buttonODATA}",
							width:"150px",
							press:[oController.onPressGoToODATA, oController]});
							
		var mainPage = new sap.m.Page({			
			title: "{i18n>titleMain}",		
			content: [				
				buttonSL,
				new sap.m.ToolbarSpacer(),
				buttonXSJS,
				new sap.m.ToolbarSpacer(),
				buttonODATA
				]
		});				
		return mainPage;	
	}


});