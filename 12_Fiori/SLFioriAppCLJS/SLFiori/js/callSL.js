var connected = false;
//To be modified: Please replace the SLServer with the host of Service Layer
//It must be identical to common name field in the certificate of Service Layer.
const SLServer = '<TODO: Please replace with your Service Layer host here>';
const SL_BASE_URL = 'https://' + SLServer + ':50000/b1s/v1/';

//Fields of Sales Order to be return in the Service Layer call.
//Performance tip: Limit the only required fields in the OData
const orderFields = ['DocEntry', 'CardName', 'DocumentStatus', 'DocDate', 'DocDueDate',
'DocTotal', 'DocCurrency', 'VatSum', 'Address',
'DocumentLines' //No able to select the fields in Sub collection DocummentLines as of B1H 9.2 PL08
];

//Build up the $select=... string of the OData query option for S.L. call
function selectFileds(fields) {
	if (typeof(fields) === 'undefined' || Array.isArray(fields) === false || fields.length === 0) {
		return '';
	}

	var selectStr = '$select=';
	var len = fields.length;
	for (var i = 0; i < len; i++) {
		if (i === 0) {
			selectStr += fields[i];
		} else {
			selectStr += ',' + fields[i];
		}
	}
	return selectStr;
}

/********************************************************
 * LogIn to Service Layer
 * Input parameters:
 * @user: B1 user name
 * @pwd : B1 user password
 * @comp: B1 comapny DB
 ********************************************************/
function connectSL(user, pwd, comp) {
	if (connected) {
	    //Already connected to SL
	    window.location.href = "index.html";
		return;
	}

	var loginInfo = {};
	loginInfo.UserName = user;
	loginInfo.Password = pwd;
	loginInfo.CompanyDB = comp;
	$.ajax({
		// the URL for the request
		url: SL_BASE_URL + "Login",

		xhrFields: {
			withCredentials: true
		},

		// the data to send (will be converted to a query string)
		data: JSON.stringify(loginInfo),

		// whether this is a POST or GET request
		type: "POST",

		// the type of data we expect back
		dataType: "json",

		// code to run if the request succeeds;
		// the response is passed to the function
		success: function(result, textStatus, request) {
			if (result.error) {
				alert(result.error);
				return;
			} else {
				B1HSL_SessionID = result.SessionId;
				//We don't have to handle the cookie. The browser will set the cookies for B1SESSION and ROUTID
				//with the setting: xhrFields {withCredentials: true}
				//However, it is not working for Safari 10.1.1.
				//document.cookie = 'B1SESSION='+result.SessionId;
				//Cookies.set('B1SESSION', result.SessionId);
				connected = true;
			    console.log('Connected to SL via jQuery');
				window.location.href = "index.html";
			}
		},
		error: function(request, textStatus, errorThrown) {
			alert("Service Layer Login failed: " + textStatus + " / " + errorThrown);
		},
		// code to run regardless of success or failure
		complete: function(xhr, status) {
			// Nothing for now.
		}
	});

}

/********************************************************
 * Generic error handler for SL call failure.
 * Expecially for unauthorised or invalid session,
 * redirect to the login page
 ********************************************************/
function SLCallErrorHandler(request, textStatus, errorThrown) {
	var msg = 'Service Layer Call failed: ' + textStatus + ' - ' + errorThrown
	console.log('error:' + errorThrown);
	console.log(JSON.stringify(request));
	if (errorThrown === 'Unauthorized') {
		msg += '\nInvalid or expired session. Please login again.';
	}
	alert(msg);
	if (errorThrown === 'Unauthorized') {
		window.location.href = "login.html";
	}
}

// TO BE MODIFIED //
// Below code is the JS caller of the Service Layer for retrieving the open sales orders.
// TO BE MODIFIED //
function getOrders() {
	var getOrdersUrl = SL_BASE_URL + 'Orders?$filter=DocumentStatus eq \'O\'&' + selectFileds(orderFields);
	$.ajax({
		type: "GET",
		xhrFields: {
			withCredentials: true
		},
		url: getOrdersUrl,
		dataType: "json",
		crossDomain: true,
		success: function(result) {
			ItemsJSONData = result;
			var oComponentContainer = new sap.ui.core.ComponentContainer({
				height: "100%",
				name: "SLFiori"
			});
			oComponentContainer.placeAt("content");
		},
		error: function(request, textStatus, errorThrown) {
			SLCallErrorHandler(request, textStatus, errorThrown);
		}
	}).done(function(response) {
		//console.log(JSON.stringify(response));
	});

}

// TO BE MODIFIED //
// Below code is the JS caller of the Service Layer for cancel the selected sales order.
// TO BE MODIFIED //
function cancelOrder() {
	var cancelUrl = SL_BASE_URL + 'Orders(' + selectedOrder + ')/Cancel';
	$.ajax({
		type: "POST",
		xhrFields: {
			withCredentials: true
		},
		url: cancelUrl,
		dataType: "json",
		crossDomain: true,
		success: function(result) {
			//oModel.refresh(true);
			sap.m.MessageBox.show(
				"Document " + selectedOrder + " is cancelled successfuly.", {
					icon: sap.m.MessageBox.Icon.success,
					title: "Confirmation"
				}
			);
		},
		error: function(request, textStatus, errorThrown) {
			SLCallErrorHandler(request, textStatus, errorThrown);
		}
	});
}

// TO BE MODIFIED //
// Below code is the JS caller of the Service Layer for close the selected sales order.
// TO BE MODIFIED //
function closeOrder() {
	var closelUrl = SL_BASE_URL + 'Orders(' + selectedOrder + ')/Close';

	$.ajax({
		type: "POST",
		xhrFields: {
			withCredentials: true
		},
		url: closelUrl,
		dataType: "json",
		crossDomain: true,
		success: function(result) {
			//oModel.refresh(true);
			sap.m.MessageBox.show(
				"Document " + selectedOrder + " is closed successfuly.", {
					icon: sap.m.MessageBox.Icon.success,
					title: "Confirmation"
				}
			);
		},
		error: function(request, textStatus, errorThrown) {
			SLCallErrorHandler(request, textStatus, errorThrown);
		}
	});
}