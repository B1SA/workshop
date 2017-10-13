//Output variable (Will become a HTML Document)
var output = "Hi " + $.session.getUsername() + " <br><br>";
//Parameter to be used in the query
var bpType = "C";
//HANA Connection initialized
var conn = $.hdb.getConnection();

// ? = PlaceHolder for parameter 
var query = 'SELECT "CardCode", "CardName", "CardType", "Balance" '+
			'FROM "SBODEMOUS"."OCRD" WHERE "CardType"= ? '; 

// Execute query, parameters should be set in order of appearance
var rs = conn.executeQuery(query, bpType); 

for(var i = 0; i < rs.length; i++){
	output += '<br>';
	
	output += 	rs[i].CardCode + " - " +    
				rs[i].CardName + " - " + 
				rs[i].CardType + " - " + 
				rs[i].Balance; 
} 

//Close HANA connection
conn.close();

// Set response in the output
$.response.contentType = "text/html";
$.response.setBody(output);