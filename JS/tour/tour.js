// g52grp____group9
// this is the js file for creating collapsible scenelist within the virtual tour

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.display === "block") {
			content.style.display = "none";
		} else {
			content.style.display = "block";
		}
	});
}

function enter() {
	console.log("hello");
	window.location.href = "./index.php" ;
}
