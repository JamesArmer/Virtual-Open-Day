function showModule(chosenModule){
  document.getElementById("display").src="../Resources/Student/Modules/" + chosenModule + ".png"
  document.getElementById("overlay").style.visibility="visible";
}

function overlayPress(){
  document.getElementById("overlay").style.visibility="hidden";
}

function changeTable(){
  table = document.getElementById("tableChoice").value;
  document.getElementById("timetable").src="../Resources/Student/" + table + ".png";
}

function changeModule(){
  chosenModule = document.getElementById("moduleChoice").value;
  document.getElementById("moduleInfo").src="../Resources/Student/Modules/" + chosenModule + ".png";
}

// Page specific help in the form of a small tour.
$(function(){
	var help = new Tour({
		debug: true,
		// basePath: "/g52grp-virtual-open-day",
		steps:[
      {
				path: "/Student/timetable.php",
				element: "select",
				title: "Example Timetables",
				smartPlacement: true,
				content: "Choose between Year 1 and Year 2 timetables through the selection box."
			},{
				path: "/Student/timetable.php",
				element: "#module-example",
				title: "Modules",
				smartPlacement: true,
				content: "Click any of the modules to find out more information about them, alternatively head to the modules page where you will also find the information."
        }]
  		});
  		help.init();
  		$('#help-icon').click(function() {
  			help.restart();
  		});
  	});
