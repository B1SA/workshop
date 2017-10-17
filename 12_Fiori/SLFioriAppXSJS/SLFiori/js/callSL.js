// TO BE MODIFIED //
// Below code is the JS caller of the Service Layer for retrieving sales orders, canceling and closing opened SO //
// TO BE MODIFIED //
function getOrders()
{
	if(document.cookie.length > 0)
	{	
	    var xsjsUrl = "xsjs/B1SLLogic.xsjs?cmd=Get&actionUri=Orders&filter=DocumentStatus&sessionID=" + document.cookie;
	 	//var xsjsUrl = "xsjs/B1SLLogic.xsjs?cmd=Get&actionUri=Orders?$orderby=DocumentStatus" + "%20" + " desc&sessionID=" + document.cookie;
	 	//
	 	jQuery.ajax({
	 			type: "GET",
	 			xhrFields:
	 				{
	 					withCredentials: true
	 				},
	 		    url: xsjsUrl,
	 		    dataType: "json",
	 		    crossDomain: true, 
	 		    success: function (result)
			    	{
	 		    		ItemsJSONData = result.body;
	 		    		//sap.ui.getCore().attachInitEvent(function() {
	 					var oComponentContainer = new sap.ui.core.ComponentContainer({
	 						height : "100%",
	 						name : "SLFiori"
	 					});
	 					oComponentContainer.placeAt("content");
	 				//});
	 		    },
			 error: function (request, textStatus, errorThrown)
			 {
	         	alert("Service Layer Items Call failed: " + textStatus + " / " + errorThrown );
	     	 }
		      });
	}
	else
			window.location.href = "login.html";
}

function cancelOrder()
{
	var xsjsUrl = "xsjs/B1SLLogic.xsjs?cmd=Action&actionUri=Orders(" + selectedOrder + ")/Cancel&sessionID=" + document.cookie;
	//
	jQuery.ajax({
		type: "POST",
		xhrFields:
			{
				withCredentials: true
			},
	  url: xsjsUrl,
	  dataType: "json",
	  crossDomain: true, 
	  success: function (result)
		{
	  	//oModel.refresh(true);
	  	sap.m.MessageBox.show(
	  		      "Document " + selectedOrder + " is cancelled successfuly.", {
	  		          icon: sap.m.MessageBox.Icon.success,
	  		          title: "Confirmation"
	  		      }
	  		    );
	  },
	error: function (request, textStatus, errorThrown)
	{
		alert("Service Layer Call for document closure has failed: " + textStatus + " / " + errorThrown );
	}
	});
}

function closeOrder()
{
	 var xsjsUrl = "xsjs/B1SLLogic.xsjs?cmd=Action&actionUri=Orders(" + selectedOrder + ")/Close&sessionID=" + document.cookie;
	  //
	  jQuery.ajax({
		type: "POST",
		xhrFields:
			{
				withCredentials: true
			},
	    url: xsjsUrl,
	    dataType: "json",
	    crossDomain: true, 
	    success: function (result)
	    {
	    	//oModel.refresh(true);
	    	sap.m.MessageBox.show(
	    		      "Document " + selectedOrder + " is closed successfuly.", {
	    		          icon: sap.m.MessageBox.Icon.success,
	    		          title: "Confirmation"
	    		      }
	    		    );
	    },
	 error: function (request, textStatus, errorThrown)
	 {
   	alert("Service Layer Call for document closure has failed: " + textStatus + " / " + errorThrown );
	 }
 });
}