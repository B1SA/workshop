sap.ui.controller("SLFiori.view.App", {
onInit : function()
{
},

onCompleteCall1: function(result)
{   
	document.cookie = result.cookies[0].value;
    B1HSL_SessionID = document.cookie;
    alert(B1HSL_SessionID);

    // TO BE MODIFIED //
    // You might need to adjust the CMD parameter based on the Business Object of your own choice" //
    // In the example below, you will retrieve Items Master Data //
    // TO BE MODIFIED //
    var xsjsUrl = "xsjs/B1SLLogic.xsjs?cmd=Items&sessionID=" + B1HSL_SessionID;
	 jQuery.ajax({
		type: "GET",
		xhrFields:
			{
				withCredentials: true
			},
	    url: xsjsUrl,
	    dataType: "json",
	    crossDomain: true, 
	    success: function (result) {
	    	
	    	ItemsJSONData = result.body;
	    	alert(ItemsJSONData);
	    },
	    error: this.onErrorCall
      });
	},

	onErrorCall: function(jqXHR, textStatus, errorThrown)
	{    
	   sap.ui.commons.MessageBox.show(jqXHR.responseText,    
	                       "ERROR",   
	                       "Error in calling Service" );    
	  return;   
	}
});