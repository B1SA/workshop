//create new elements
var newHeading = document.createElement("h1");
var newParagraph = document.createElement("p");

//to add content, use innerHTML
newHeading.innerHTML = "Did You Know?";
newParagraph.innerHTML = "Most kangaroos are left-handed";

// Add new elements to the HTML
document.getElementById("jsDiv").appendChild(newHeading);
document.getElementById("jsDiv").appendChild(newParagraph);

// Untyped variables
var a = 10;
var b = 20;
var c = 'The sum of a + b is ->' + (a+b) ;

//Pops up Alert to user
alert(c);