function showData(bpType){
	$.response.contentType = "application/json";
	
	var connection = $.hdb.getConnection();
	
	//Load procedure of specified schema
	var getBpByTypeProc = connection.loadProcedure('SBODEMOUS', 'GETBPBYTYPE');

	//The getBpByTypeProc object act as proxy to the procedure 
	var results = getBpByTypeProc(bpType); 

	//Build the response
	$.response.status = $.net.http.OK;
	$.response.contentType = "application/json";
	$.response.setBody(JSON.stringify(results));

	connection.close();	
}

var bpType = $.request.parameters.get("bpType");

showData(bpType);