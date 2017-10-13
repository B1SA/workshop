//Complete Library Path and Library Name without extension
var lib = $.import("<LibraryPath>","<LibraryName"); 
 
var query = 'SELECT TOP ? "CardCode", "CardName", "CardType", "Balance" ' + 
			'FROM "SBODEMOUS"."OCRD" WHERE "CardType"= ?'; 

var bpType = $.request.parameters.get('bpType');
var topNb = $.request.parameters.get('top');

//Library Function (in the xsjslib file)
lib.showData(query, bpType, topNb);