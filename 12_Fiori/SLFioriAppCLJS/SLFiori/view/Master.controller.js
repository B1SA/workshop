jQuery.sap.require("sap.m.MessageBox");

sap.ui.core.mvc.Controller.extend("SLFiori.view.Master", {
	
	oModel: null,
	
	onInit: function()
	{
		// TO BE MODIFIED //
	    // Below is the binding procedure of the ListItem in order to display the Items Master data in a flat list //
	    // TO BE MODIFIED //
		var oList = this.getView().byId("list");
		ordersList = oList;
		var oListitem = this.getView().byId("mainListItem");
    	oModel = new sap.ui.model.json.JSONModel();
    	oModel.setData(ItemsJSONData);
    	oList.setModel(oModel);
    	oList.bindItems("/value", oListitem);
    	this.getView().setModel(oModel);
    
	},
	
	handleSearch: function() {
		// add filter for search
		var filters = [];
		var searchString = this.getView().byId("searchField").getValue();
		if (searchString && searchString.length > 0) {
			filters = [ new sap.ui.model.Filter("CardName", sap.ui.model.FilterOperator.Contains, searchString) ];
		}
		
		// update list binding
		var list = this.getView().byId("list");
		var binding = list.getBinding("items");
		binding.filter(filters);
	},
	
	onGrowingList: function(oEvent) {
		//alert(oEvent.getParameter('actual') + ", " + oEvent.getParameter('total'));
	},
	
	onUpdatingList: function(oEvent) {
		//alert(oEvent.getParameter('reason')  + "," + oEvent.getParameter('actual') + ", " + oEvent.getParameter('total'));
	},
	
	handleSelect: function(oEvent)
	{
		var oListItem = oEvent.getParameter("listItem") || oEvent.getSource();
		selectedOrder = oListItem.mAggregations.attributes[0].mProperties.text;
		// trigger routing to BindingPath of this ListItem - this will update the data on the detail page
		sap.ui.core.UIComponent.getRouterFor(this).navTo("Detail",{from: "master", contextPath: oListItem.getBindingContext().getPath().substr(7)});
	}
});	