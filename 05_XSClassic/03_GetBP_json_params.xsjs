/** 
 * This service return a list of Business Partners based on 2 parameters
 * bpType = C, L or S // Customer, Lead or Supplier
 * top = Number of records
 * to call it access http://<hanaServr>:<xsEnginePort>/<pathTothisFile>?bpType=<Type>&top=<Number>
**/

function showData(query, bpType, topNb){
	var conn = $.hdb.getConnection();
	var rs = conn.executeQuery(query, topNb, bpType);
	
	$.response.contentType = "application/json"; // Specify output
	$.response.setBody(JSON.stringify(rs));
	$.response.status = $.net.http.OK;
	
	conn.close();
}

var Statement =  'SELECT TOP ? "CardCode", "CardName", "CardType", "Balance"'+
				' FROM "SBODEMOUS"."OCRD" WHERE "CardType"= ?'; 

//Input parameter handling
var CardType = $.request.parameters.get('bpType');
var Records  = $.request.parameters.get('top');

showData(Statement, CardType, Records);