slLib = $.import("<Path to B1SLLogic.xsjslib>","B1SLLogic"); 

var output = {};
var UserName = "manager";
var UserPass = "1234";
var UserComp = "SBODEMOUS";

function setOutputMessage(){
    
    $.response.contentType = "application/json"; 
    $.response.setBody(JSON.stringify(output));
    $.response.status = $.net.http.OK;
}

function GetOrders(appRequest){
    
    var SESSIONID = "";
    var NODEID = "";
    var body;
    
    // SL credentials
    var loginInfo = {};
    loginInfo.UserName = UserName;
    loginInfo.Password = UserPass;
    loginInfo.CompanyDB = UserComp;
    
    // SL LOGIN          
    var response = slLib.SLLogin(JSON.stringify(loginInfo), null, null);
    
    // B1SESSION and ROUTEID cookies returned by Login
    for (var j in response.cookies){
        if (response.cookies[j].name == "B1SESSION"){
            SESSIONID = response.cookies[j].value;
           output.SessionID = SESSIONID;
        }
        else if (response.cookies[j].name == "ROUTEID") {
            NODEID = response.cookies[j].value;
            output.NodeID = NODEID;
        }
    }
    
    //Get Approval Request Information
    response = slLib.GetOrders(appRequest, SESSIONID,NODEID);
   
    //Parse response body
    body = JSON.parse(response.body.asString());
    
    // Removes metadata
    delete body["odata.metadata"];
    
    //Add Approval Request Decision to Approval Request Body
    //output = body;
    
    output.DocEntry = body.DocEntry;
    output.Message = 'Call de Service Layer ok';
    output.Total = body.DocTotal;
    output.ralph = body.CardCode;
    output.kafhai = body.DocDate;
    
    setOutputMessage();

}
    

var req = 0;
req = $.request.parameters.get('order');

if (!req){ 
	output.error = "Invalid Approval Request - " + req;                                                           
	$.response.status = $.net.http.OK;
	$.response.contentType = "application/json"; 
    $.response.setBody(JSON.stringify(output));
}else{
    GetOrders(req);        
}