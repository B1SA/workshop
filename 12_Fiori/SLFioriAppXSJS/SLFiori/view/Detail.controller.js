sap.ui.core.mvc.Controller.extend("SLFiori.view.Detail", {
	
	oModel: null,

	// TO BE MODIFIED //
    // Below is the binding procedure of the Details view in order to display the Items Master data in the header area //
    // TO BE MODIFIED //
	onInit: function()
	{
		var view = this.getView();
		oModel = new sap.ui.model.json.JSONModel();
	    //
		oModel.setData(ItemsJSONData);
    	view.setModel(oModel);
    
		//
		 sap.ui.core.UIComponent.getRouterFor(this).attachRouteMatched(function(oEvent) {
			// when detail navigation occurs, update the binding context
			// TO BE MODIFIED //
			// Below is the binding procedure of the Items Table view in order to display the Sales Order Document Lines in the Details area //
			// You might need to change the Service Identifier from /DocumentLines to match your Entity Lines collection name
			// TO BE MODIFIED //
			if (oEvent.getParameter("name") === "Detail")
			{
				var context = new sap.ui.model.Context(view.getModel(), '/value/' + oEvent.getParameter("arguments").contextPath);
				view.setBindingContext(context);
				// Make sure the master is here
				var oItemsTbl = this.getView().byId("idItemsTable");
				var oColListItem = this.getView().byId("idColListItem");
				oItemsTbl.setModel(oModel);
				oItemsTbl.bindItems(context.sPath + "/DocumentLines", oColListItem);
		    }
		}, this);
		
	},
	
	openActionSheet: function() {

		if (!this._oActionSheet) {
			this._oActionSheet = new sap.m.ActionSheet({
				buttons: new sap.ushell.ui.footerbar.AddBookmarkButton()
			});
			this._oActionSheet.setShowCancelButton(true);
			this._oActionSheet.setPlacement(sap.m.PlacementType.Top);
		}
		
		this._oActionSheet.openBy(this.getView().byId("actionButton"));
	},
	
	onExit: function() {
		if (this._oActionSheet) {
			this._oActionSheet.destroy();
			this._oActionSheet = null;
		}
	},
	
	// TO BE MODIFIED //
	// Below is the function definition to call the Service Layer for closing an opened sales order //
	// TO BE MODIFIED //
		handleCloseBtnPress: function(oEvent) {
			var oListItem = ordersList.getSelectedItem();
		    oListItem.setMarkLocked(true);
		    ordersList.setSelectedItem(false);
		    //
			var id = oListItem.getBindingContext().getPath().substr(7);
			var docStatusTxt = this.getView().byId("text2");
			docStatusTxt.setText("Closed");
			//
		    closeOrder();
	},
		
	// TO BE MODIFIED //
	// Below is the function definition to call the Service Layer for canceling an opened sales order //
	// TO BE MODIFIED //
	handleCancelBtnPress: function(oEvent) {
		var oListItem = ordersList.getSelectedItem();
		    oListItem.setMarkLocked(true);
		    ordersList.setSelectedItem(false);
		    //
			var id = oListItem.getBindingContext().getPath().substr(7);
			var docStatusTxt = this.getView().byId("text2");
			docStatusTxt.setText("Cancelled");
			//
			cancelOrder();
		},
			
		handleNavButtonPress: function(oEvent) {
        var history = sap.ui.core.routing.History.getInstance();
		var url = sap.ui.core.UIComponent.getRouterFor(this).getURL("master", {});
		var direction = history.getDirection(url);
		if ("Backwards" === direction) {
			window.history.go(-1);
		} else {
			var replace = true; // otherwise we go backwards with a forward history
			this.navTo(route, data, replace);
		}
	}
});
