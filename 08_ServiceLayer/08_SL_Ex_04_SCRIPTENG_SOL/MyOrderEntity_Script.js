/**
 * Create an order with a specific comment "Created via Script Engine".
 * 
 */

var ServiceLayerContext = require('ServiceLayerContext.js');
var http = require('HttpModule.js');
var Order = require('EntityType/Document.js');

/* 
 * Entry function the POST http request.
 * POST /b1s/v1/script/NS/MyOrderEntity // Please note NS is your partner namespace!!!
 * 
 * {
        "CardCode": "c1",
        "DocDate": "2016-07-11",
        "DocDueDate": "2016-07-11",
        "DocumentLines": [
            {
                "ItemCode": "i1",
                "UnitPrice": 10,
                "Quantity": 1
            },
            {
                "ItemCode": "i2",
                "UnitPrice": 10,
                "Quantity": 1
            }
        ]
 *  }
 */
function POST() {
	var responseBody = "";
    
    // Check the http request body  
	var jsonObj = http.request.getJsonObj();
    if (!jsonObj) {
        throw http.ScriptException(http.HttpStatus.HTTP_BAD_REQUEST, "fail to get the content of JSON format from the request payload");
    }
    
    // Initialize the Order variable with the http request body 
    var order = Order.create(jsonObj);
    // Add the specific comment
    order.Comments = "Created via Script Engine";
    // use console.logs to better understand your script's behavior
    console.log("OrderComment request body" + JSON.stringify(order));

    // Initialize Service Layer Context
    var slContext = new ServiceLayerContext();
    
    // Add the Orders entity
    var dataSrvRes = slContext.Orders.add(order);
    // Add operation failed
    if (!dataSrvRes.isOK()) {
        return http.response.send(dataSrvRes.status, res.body);
    }
    // Add operation successfully executed
    else {
        // Return only DocEntry, DocNum, DocTotal and Comments properties
        responseBody = "{ \"Order\": [{\"DocEntry\":" + dataSrvRes.body.DocEntry + ", \"DocNum\":" +  dataSrvRes.body.DocNum  + ", \"DocTotal\":" +  dataSrvRes.body.DocTotal + ", \"Comments\": \"" +  dataSrvRes.body.Comments + "\"}]}";
        return http.response.send(dataSrvRes.status, responseBody); 
    }
}

/** 
 * Entry function the GET http request.
 * Returns only fields DocEntry, DocNum, DocTotal and Comments
 * GET /b1s/v1/script/NS/MyOrderEntity(key)
 * 
 */
function GET() {

    // Get the Order's key from the http request key value
    var key = http.request.getEntityKey();
    if (!key) {
        throw http.ScriptException(http.HttpStatus.HTTP_BAD_REQUEST, "Fail to get entity key from request URL");
    }

    // Initialize Service Layer Context
    var slContext = new ServiceLayerContext();

    // Retrieve the Order from Service Layer context
    var dataSrvRes = slContext.Orders.get(key);
    // Order retrieve operation failed
    if (!dataSrvRes.isOK()) {
        http.response.send(dataSrvRes.status, dataSrvRes.body);
    } 
    // Order retrieved successfuly
    else {
        responseBody = "{ \"Order\": [{\"DocEntry\":" + dataSrvRes.body.DocEntry + ", \"DocNum\":" +  dataSrvRes.body.DocNum  + ", \"DocTotal\":" +  dataSrvRes.body.DocTotal + ", \"Comments\": \"" +  dataSrvRes.body.Comments + "\"}]}";
        http.response.send(dataSrvRes.status, responseBody);
    }
}

/** 
 * Entry function the PATCH http request.
 * PATCH /b1s/v1/script/NS/MyOrderEntity(key)
 * 
 * {"Comments": "Updated from Script Engine"}
 */
function PATCH() {
    // Get the Order's key from the http request key value
    var key = http.request.getEntityKey();
    if (!key) {
        throw http.ScriptException(http.HttpStatus.HTTP_BAD_REQUEST, "Fail to get entity key from request URL");
    }

    // Check the http request body  
	var jsonObj = http.request.getJsonObj();
    if (!jsonObj) {
        throw http.ScriptException(http.HttpStatus.HTTP_BAD_REQUEST, "fail to get content of JSON format from the request payload");
    }
    
    // Initialize Service Layer Context
    var slContext = new ServiceLayerContext();

    // Update the Orders entity
    var dataSrvRes = slContext.Orders.update(jsonObj, key);
    // Order updated successfuly
    if (dataSrvRes.isOK()) {
        http.response.send(dataSrvRes.status, dataSrvRes.body);
    } 
    // Order update operation failed
    else {
        http.response.send(dataSrvRes.status, dataSrvRes.body);
    }
}

/** 
 * Entry function the DELETE http request.
 * DELETE /b1s/v1/script/NS/MyOrderEntity(key)
 * 
 * Operation Not Implemented for this entity
 */
function DELETE() {
    http.response.setStatus(http.HttpStatus.HTTP_NOT_IMPLEMENTED);
    http.response.send();
}
