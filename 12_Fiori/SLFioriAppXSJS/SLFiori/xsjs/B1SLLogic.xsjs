function callServiceLayer(path, method, body, sessionID, routeID) {
    try {
        $.trace.debug("callServiceLayer (path: " + path + ", method: " + method + ", body: " + body + ", sessionID: " + sessionID + ", routeID: " + routeID + ")");

        var destination = $.net.http.readDestination("SLFioriAppXSJS.SLFiori.xsjs", "B1SL");

        var client = new $.net.http.Client();

        var header = "";
        if (method === $.net.http.PATCH) {
            method = $.net.http.POST;
            header = "X-HTTP-Method-Override: PATCH";
        }

        var req = new $.web.WebRequest(method, path);

        if (header !== "") {
            req.headers.set("X-HTTP-Method-Override", "PATCH");
        }

        if (body) {
            req.setBody(body);
        }

        if (sessionID) {
            req.cookies.set("B1SESSION", sessionID);
        }
        if (routeID) {
            req.cookies.set("ROUTEID", routeID);
        }

        client.request(req, destination);

        var response = client.getResponse();

        //The rest of the file (attached) is just a default forward of the response  
        var myCookies = [],
            myHeader = [],
            myBody = null;

        //Cookies  
        for (var c in response.cookies) {
            myCookies.push(response.cookies[c]);
        }
        //Headers  
        for (var h in response.headers) {
            myHeader.push(response.headers[h]);
        }
        //Body  
        if (response.body)
            try {
                myBody = JSON.parse(response.body.asString());
            } catch (e) {
            myBody = response.body.asString();
        }

        $.response.contentType = "application/json";

        $.response.status = response.status;

        $.response.setBody(JSON.stringify({
            "status": response.status,
            "cookies": myCookies,
            "headers": myHeader,
            "body": myBody
        }));

        $.trace.debug("callServiceLayer response status: " + $.response.status);
    } catch (e) {
        $.trace.warning("callServiceLayer Exception: " + e.message);
        $.response.contentType = "application/json";
        $.response.setBody(JSON.stringify({
            "error": e.message
        }));
    }
}

var B1SLAddress = "/b1s/v1/";
var aCmd = $.request.parameters.get('cmd');
var actionURI = $.request.parameters.get('actionUri');
var sessionID = $.request.parameters.get('sessionID');
var routeID = $.request.parameters.get('routeID');
var filter = $.request.parameters.get('filter');
var path = B1SLAddress + actionURI;
var body = null;

if ($.request.body)
{
    body = $.request.body.asString();
}

$.trace.debug("B1SLogic cmd: " + aCmd);

// TO BE MODIFIED //
// You might need to adjust the switch cases below based on your own business logic "Business Objects on your own choice" //
// TO BE MODIFIED //

switch (aCmd) {
    case 'login':
        path = B1SLAddress + "Login";
        callServiceLayer(path, $.net.http.POST, body, sessionID, routeID);
        break;
    case 'Add':
        callServiceLayer(path, $.net.http.POST, body, sessionID, routeID);
        break;
    case 'Update':
        callServiceLayer(path, $.net.http.PATCH, body, sessionID, routeID);
        break;
    case 'Delete':
        callServiceLayer(path, $.net.http.DEL, body, sessionID, routeID);
        break;
    case 'Get':
    	if(filter != "")
    		path += "?$top=10&$filter=" + filter + "%20eq%20'O'";
        callServiceLayer(path, $.net.http.GET, body, sessionID, routeID);
        break;
    case 'Action':
        callServiceLayer(path, $.net.http.POST, body, sessionID, routeID);
        break;
    default:
        $.trace.warning("callServiceLayer Exception: " + e.message);
        $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
        $.response.contentType = "application/json";
        $.response.setBody(JSON.stringify({
            "Unknown command": aCmd
        }));
        break;
}