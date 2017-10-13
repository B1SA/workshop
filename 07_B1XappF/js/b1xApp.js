
$(function () {	
	//When button with id login is pressed
	$("#login").click(function () {
		var button = $(this);
		
		//REST Call using jQuery Ajax function
		$.ajax({
			type: "POST",
			url: "/sap/sbo/platform/login",
			headers: { 
				"Authorization": "Basic "+ btoa($("#hdbuser").val() 
					+ ":" + $("#hdbpwd").val()) 
			}, 
			data: {
				"company": $("#company").val(),
				"username": $("#b1user").val(),
				"password": $("#b1pwd").val(),
				"language": $("#b1language").val()
			},
			error: function (xhr, status, error) {
				window.alert("login failed: " + xhr.responseText);
			},
			success: function () {
				window.alert("login successfully.");
				window.location.href= "index.html";
			}
		}); 
	});

});


$(document).ready(function(){  
	
	// Connect Button (on modal window)
	$("#sysinfo").click(function(){
		
		$.get('/sap/sbo/platform/env', function() {
		})
		.done(function(json) {	
			//Show message with JSON String 
			alert(JSON.stringify(json));
		})

		.fail(function() {
			alert("ERROR!")
		})	
	});

	$("#udq").click(function(){
		$.ajax({
			type: "POST",
			url: "/sap/sbo/platform/query",
			contentType: "application/json",
			dataType: "json",
			data: JSON.stringify({
				"type": "sql",
				"category": "System",
				"name": "Total Sales Amount",
				"param": [],
				"format": "JSON"}),
			error: function (xhr, status, error) {
				alert("UDQ Failed: " + xhr.responseText);
			},
			success: function (json) {
				alert("UDQ Executed.");
				displayResult(json.data[0]);
			}
		})

	});
});


function displayResult(result){
	// Generic function to display any set of record
	var data;
	var json;
	var line;

	for(var i = 0; i < result.length ; i++){
		json = result[i];
		line = "<tr>"
		for (var property in json) {
			if (json.hasOwnProperty(property)) {
				data = json[property];
				line += "<td>" + JSON.stringify(data) + "</td>";
			}
		}
		line += "</tr>"
		$('#result').append(line);
	}
}

