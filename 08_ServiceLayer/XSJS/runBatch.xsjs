
var destination = "http://<host>:50003/b1s/v1/$batch";
var client = new $.net.http.Client();

var req = new $.web.WebRequest($.net.http.POST, "");
req.headers.set("Content-Type","multipart/mixed");
req.cookies.set("B1SESSION", <B1SESSIONID>);

req.entities.create();
req.entities[0].headers.set("Content-Type","multipart/mixed");
req.entities[0].setBody( 
            "--batch_myBatch001"
            + " \n" 
            + "Content-Type:application/http"
            + " \n"
            + "Content-Transfer-Encoding:binary"
            + " \n" 
            + " \n" 
            + "--changeset_myChangeset001" 
            + " \n"
            + " \n"
            + "POST /b1s/v1/Items" 
            + " \n"
            + " \n" 
            + '{"ItemCode": "TCM351","ItemName": "My first item from SL Batch and XSJS call","ItemType": "itItems"}'
            + " \n"
            + "--changeset_myChangeset001" 
            + " \n" 
            + "Content-Type:application/http"
            + " \n"
            + "Content-Transfer-Encoding:binary"
            + " \n"
            + " \n"
            + "POST /b1s/v1/Items" 
            + " \n"
            + " \n" 
            + '{"ItemCode": "TCM350","ItemName": "My second item from SL Batch and XSJS call","ItemType": "itItems"}'
            + " \n"
            + " \n" 
            + "--changeset_myChangeset001--" 
            + " \n"
            + "--batch_myBatch001--" );
            
client.request(req, destination);
var response = client.getResponse();

//Variables for response handling
var myCookies = [],
    myHeader = [],
    myBody = null,
    myEntityBody = null;

//Cookies  
for (var c in response.cookies) {
    myCookies.push(response.cookies[c]);
}

//Headers  
for (var h in response.headers) {
    myHeader.push(response.headers[h]);
}

// Body  
if (response.body)
    try {
        myBody = JSON.parse(response.body.asString());
    } catch (e) {
    myBody = response.body.asString();
}

//Entities Body 
for (var w in response.entities) {
    if (response.entities[w].body){
        try {
            myEntityBody = JSON.parse(response.entities[w].body.asString());
            } catch (e) {
                myEntityBody = response.entities[w].body.asString();
        }   
    }
}

$.response.contentType = "application/json";
$.response.status = response.status;
$.response.setBody(JSON.stringify({
    "status": response.status,
    "cookies": myCookies,
    "headers": myHeader,
    "body": myBody,
    "entitybody": myEntityBody
}));
    