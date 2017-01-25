var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("coloredReindeer");
var divString = hohohoElement.innerHTML;

divString += "<ul>"

for (var i = 0; i<reindeer.length; i++) {
	divString += "<li>" + colors[i] + " " + reindeer[i] + "</li>"; 
}

divString += "</ul>";

hohohoElement.innerHTML = divString;
