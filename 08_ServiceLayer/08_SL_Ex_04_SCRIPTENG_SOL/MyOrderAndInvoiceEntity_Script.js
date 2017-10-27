/**
 * Create an order and create a delivery based on the order in a global transaciton.
 * 
 */

var ServiceLayerContext = require('ServiceLayerContext.js');
var http = require('HttpModule.js');
var Order = require('EntityType/Document.js');
var Invoice = require('EntityType/Document.js');
var DeliveryNote = require('EntityType/Document.js');

/* 
 * Entry function the POST http request.
 * POST /b1s/v1/script/NS/MyOrderAndInvoiceEntity // Please note NS is your partner namespace!!!
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
            
    // check the http request body  
	var jsonObj = http.request.getJsonObj();
    if (!jsonObj) {
        throw http.ScriptException(http.HttpStatus.HTTP_BAD_REQUEST, "fail to get the content of JSON format from the request payload");
    }
    
    // initialize the Order variable with the http request body 
	var order = Order.create(jsonObj);
    order.Comments = "Created via Script Engine";
    console.log("MyOrderAndInvoiceEntity request body" + JSON.stringify(order));

    // initialize Service Layer Context
    var slContext = new ServiceLayerContext();
    
    //start the global transaction 
    slContext.startTransaction();

    // add the Orders entity
    var dataSrvRes = slContext.Orders.add(order);

    // add operation failed
    if (!dataSrvRes.isOK()) {
        // Rollback the global transaction
        slContext.rollbackTransaction();
        return http.response.send(http.HttpStatus.HTTP_BAD_REQUEST, dataSrvRes.body);
    }

    //get the newly created order as a variable from the response json body 
    var newOrder = Order.create(dataSrvRes.body);
	
	//fill the invoice variable based on the order
    var invoice = new Invoice();
    invoice.DocDate = newOrder.DocDate;
    invoice.DocDueDate = newOrder.DocDueDate;
    invoice.CardCode = newOrder.CardCode;
    invoice.DocumentLines = new Invoice.DocumentLineCollection();
    for (var lineNum = 0; lineNum < order.DocumentLines.length; ++lineNum) {
        var line = new Invoice.DocumentLine();
        line.BaseType = 17;
        line.BaseEntry = newOrder.DocEntry;
        line.BaseLine = lineNum;
        invoice.DocumentLines.add(line);
    }
    
	// add the Invoice entity
    dataSrvRes = slContext.Invoices.add(invoice);
	
    // add operation failed
    if (!dataSrvRes.isOK()) {
        // rollback the global transaction
        slContext.rollbackTransaction();
        return http.response.send(http.HttpStatus.HTTP_BAD_REQUEST, dataSrvRes.body);
    }
    // add operation successfully executed
    else {
        // commit the global transaction
        slContext.commitTransaction();
        // Return only DocEntry, DocNum, DocTotal and Comments properties from both the Order and the Invoice
        responseBody = "{ \"Order\": [{\"DocEntry\":" + newOrder.DocEntry + ", \"DocNum\":" +  newOrder.DocNum  + ", \"DocTotal\":" +  newOrder.DocTotal + ", \"Comments\": \"" +  newOrder.Comments + "\"}], \
                          \"Invoice\": [{\"DocEntry\":" + dataSrvRes.body.DocEntry + ", \"DocNum\":" +  dataSrvRes.body.DocNum  + ", \"DocTotal\":" +  dataSrvRes.body.DocTotal + ", \"Comments\": \"" +  dataSrvRes.body.Comments + "\"}]}";
        return http.response.send(http.HttpStatus.HTTP_CREATED, responseBody); 
    }
}

/** 
 * Entry function the GET http request.
 * Returns only fields DocEntry, DocNum, DocTotal and Comments
 * GET /b1s/v1/script/NS/MyOrderEntity(key)
 * 
 */
function GET() {
    http.response.setStatus(http.HttpStatus.HTTP_NOT_IMPLEMENTED);
    http.response.send();
}

/** 
 * Entry function the PATCH http request.
 * PATCH /b1s/v1/script/NS/MyOrderEntity(key)
 * 
 * {"Comments": "Updated from Script Engine"}
 */
function PATCH() {
    http.response.setStatus(http.HttpStatus.HTTP_NOT_IMPLEMENTED);
    http.response.send();
}

/** 
 * Entry function the DELETE http request.
 * DELETE /b1s/v1/script/NS/MyOrderEntity(key)
 * 
 */
function DELETE() {
    http.response.setStatus(http.HttpStatus.HTTP_NOT_IMPLEMENTED);
    http.response.send();
}

