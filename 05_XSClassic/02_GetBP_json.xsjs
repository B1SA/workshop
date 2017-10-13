function getBPJSON(bpType){
	//Initialize connection
	var conn = $.hdb.getConnection();

	// ? = PlaceHolder for parameter 
	var query = 'SELECT "CardCode", "CardName", "CardType", "Balance" ' +
				'FROM "SBODEMOUS"."OCRD" WHERE "CardType"= ? '; 
	
	// Execute query, parameters should be set in order of appearance
	var rs = conn.executeQuery(query, bpType); 

	//Close Connection
	conn.close();

	// formatting not required for JSON response, already JSON format
	$.response.contentType = "application/json";	
	$.response.setBody(JSON.stringify(rs));
	//Set HTTP status (OK = 200) - https://tinyurl.com/httpstatus
	$.response.status = $.net.http.OK; 		
}

//On server side JavaScript. Functions should be declared before called
getBPJSON('C');

