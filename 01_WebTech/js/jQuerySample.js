// Only runs once DOM is ready
$(document).ready(function(){  
	//When button with ID btn1 is pressed
	$("#btn1").click(function(){
		//change all text on h1 tag
		$("h1").text("this is a jQuery text")
		$("h2").fadeIn();
	});

	$("#btn2").click(function(){
		$("h2").fadeOut();
	});
});

