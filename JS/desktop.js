// Page specific help in the form of a small tour.
$(function(){
	var help = new Tour({
		debug: true,
		//basePath: "/g52grp-virtual-open-day",
		steps:[
      {
				path: "/Desktop/desktop.php",
				element: "#sidebar",
				title: "Choosing Your desktop",
				smartPlacement: true,
				content: "Choose between the Linux and Windows virtual desktops. Each offer different software, so make sure to check out both."
			},{
				path: "/Desktop/desktop.php",
				element: "#exe",
				title: "Learning about software",
				smartPlacement: true,
				content: "Click any icon to learn about what the software is, and what you’ll be using it for.\n" +
					"Click anywhere on the screen when the information is being displayed to close the prompt (or load the next screen if there are multiple)\n"
        }]
  		});
  		help.init();
  		$('#help').click(function() {
  			help.restart();
  		});
  	});



var multflag = 0;
var multname = "";

function changeToWindows(){
  document.getElementById("linux").style.visibility="hidden";
  document.getElementById("windows").style.visibility="visible";
  document.getElementById("background").src="../Resources/Desktop/Backgrounds/windows.png";
}

function changeToLinux(){
  document.getElementById("linux").style.visibility="visible";
  document.getElementById("windows").style.visibility="hidden";
  document.getElementById("background").src="../Resources/Desktop/Backgrounds/linux.png";
}

function iconPress(icon){
  document.getElementById("display").src="../Resources/Desktop/Display/" + icon + ".png"
  document.getElementById("overlay").style.visibility="visible";
  if(icon == "coursework" || icon == "latex" || icon == "matlab" || icon == "putty" || icon == "gitkraken"){
    // Add a program name above when multiple images need to be displayed.
    multflag = 1;
    multname = icon;
  }
}

function overlayPress(){
  // Used when multiple images need to be displayed.
  if(multflag){
    multflag = 0;
    switch(multname){
      case "gitkraken":
        iconPress("gitkraken2");
        break;
      case "putty":
        iconPress("putty2");
        break;
      case "latex":
        iconPress("latex2");
        break;
      case "matlab":
        iconPress("matlab2");
        break;
      case "coursework":
        document.getElementById("display").src="";
        document.getElementById("video").style.visibility="visible";
        multname = "reset"; //Set flag, so on click the video is hidden and the overlay is closed
        multflag = 1;
        break;
      case "reset":
        document.getElementById("video").style.visibility="hidden";
        document.getElementById("overlay").style.visibility="hidden";
        break;
    }
  }else{
    document.getElementById("overlay").style.visibility="hidden";
  }
}
window.onload=changeToLinux;
