// function for creating the site tour
$(function(){
	var tour = new Tour({
		debug: true,
		//basePath: "/g52grp-virtual-open-day",
		steps:[
			{
				path: "/",
				title: "Hello!",
				content: "Welcome to the school of Computer Science.",
				smartPlacement: true,
				orphan: true
			},{
				path: "/",
				element: ".navbar",
				title: "Navigation bar",
				content: "Choose pages you wish to go to.",
				smartPlacement: true,
				backdrop: true
			}, {
				path: "/",
				element: "#tourbtn",
				title: "Virtual Tour",
				smartPlacement: true,
				content: "Go to Virtual Tour page."
			},{
				path: "/Tour/tour.php",
				element: ".tour",
				title: "Virtual Tour",
				smartPlacement: true,
				content: "Enter the CS building."
			},{
				path: "/Tour/index.php",
				element: "#sceneList",
				title: "Scene List",
				smartPlacement: true,
				content: "Choose the places you wanna see.",
				backdrop: true
			},{
				path: "/Tour/index.php",
				element: "#autorotateToggle",
				title: "Auto-Rotate",
				smartPlacement: true,
				content: "Enable/Disable Auto-Rotation of the scene.",
				backdrop: true
			},{
				path: "/Tour/index.php",
				element: "#fullscreenToggle",
				title: "Full Screen ",
				smartPlacement: true,
				content: "Enter/exit full screen mode.",
				backdrop: true
			},{
				path: "/Tour/index.php",
				element: "#exitToggle",
				title: "Exit",
				smartPlacement: true,
				content: "Exit the tour.",
				backdrop: true
			},{
				path: "/Tour/tour.php",
				element: "#studentbtn",
				title: "Typical Student Day",
				smartPlacement: true,
				content: "Go to page: Typical Student Day."
			},{
				path: "/Student/student.php",
				element: "#timetableSide",
				title: "Choosing the part you want to view",
				smartPlacement: true,
				content: "Choose to view a short video about a day of a computer science student, view the computer science timetable, view the introduction of modules or view the assessment."
			},{
				path: "/Student/timetable.php",
				element: "select",
				title: "View Timetable",
				smartPlacement: true,
				content: "Choose to view four semesters timetable in the drop down menu."
			},{
				path: "/Student/timetable.php",
				element: "#module-example",
				title: "A class",
				smartPlacement: true,
				content: "You can click any icon to view the introduction of the associated module.Click anywhere on the screen when the information is being displayed to close the prompt.\n"
			},{
				path: "/Student/modules.php",
				element: "#yearChoice",
				title: "View Modules",
				smartPlacement: true,
				content: "Choose which module of which year you want to view."
			},{
				path: "/Student/modules.php",
				element: "#moduleChoice",
				title: "View Modules",
				smartPlacement: true,
				content: "Choose which module you want to view."
			},{
				path: "/Student/assessment.php",
				element: "select",
				title: "View assignment",
				smartPlacement: true,
				content: "Choose viewing coursework or exam samples."
			},{
				path: "/Student/assessment.php",
				element: "#progbtn",
				title: "Programming Session",
				smartPlacement: true,
				content: "Go to page: Programming Session."
			}, {
				path: "/Programming/programming.php",
				title: "Welcome to programming session",
				smartPlacement: true,
				content: "The homepage contains a short introduction about javascript and some links to external websites with further, more complex tasks in javascript\n" +
					"Then each of the three tasks are outlined with basic instructions and example outputs to let the user know if they have completed the task correctly\n",
				orphan: true
			},{
				path: "/Programming/task1.php",
				element: "#editor",
				title: "Editor",
				smartPlacement: true,
				content: "Code within the <script></script> tags, then click the run button to run the script"
			},{
				path: "/Programming/task1.php",
				element: "#desktopbtn",
				title: "Virtual Desktop",
				smartPlacement: true,
				content: "Go to page: Virtual Desktop."
			},{
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
			},{
				path: "/Q&A/q&a.php",
				element: "#categories",
				title: "Category Selection",
				smartPlacement: true,
				content: "Choose a category to narrow down your question search"
			},{
				path: "/Q&A/q&a.php",
				element: "#q1",
				title: "Questions ",
				smartPlacement: true,
				content: "Take a look at frequently asked questions, and their answers"
			},{
				path: "/Q&A/q&a.php",
				element: "#Search",
				title: "Searching",
				smartPlacement: true,
				content: "Use the keyword search to narrow down the questions"
			},{
				path: "/Q&A/q&a.php",
				element: "#sortingButtons",
				title: "Sort Questions",
				smartPlacement: true,
				content: "See the most popular questions by sorting by popularity"
			},{
				path: "/Q&A/q&a.php",
				element: "#vote1",
				title: "Upvoting",
				smartPlacement: true,
				content: "Vote for the questions you find most helpful, so other people can find the useful questions."
			},{
				path: "/",
				title: "The End",
				content: "The Tour is ended, click End Tour to close this box.",
				smartPlacement: true,
				orphan: true
			}]
		});
		tour.init();
		$('#start-tour').click(function() {
			tour.restart();
		});
	});

// chat bot configuration
  var bot_config = {
    title: "virtualopenbot",
    subtitle: "Talk to a chatbot.",
    colors: { theme: "#005697", text: "#FFFFFF" },
    conversationOpener: "Hi, I'm a chatbot designed to answer your questions.",
    placeholderText: "Type a message...",
    botAvatar: "https://widget.pandorabots.com/prod/assets/pb-robot.svg",
    PB_BOTKEY: "HO6n4M4Hmj3CPvbn7BUpLeOmWIcNGM1OprEBNnaQjeGQQ1KcGNdfrwZ3Q_8d7uxak5PriyFF59W29ijk9lDarQ~~"
  }


// Desktop performance increase
  var images = new Array();
  $(document).ready(function(){
		for(i = 0; i < 17; i++){
			images[i] = new Image();
		}

    images[0].src = "../Resources/Desktop/Backgrounds/linux.png";
    images[1].src = "../Resources/Desktop/Backgrounds/windows.png";
		images[2].src = "../Resources/Desktop/Display/code.png";
		images[3].src = "../Resources/Desktop/Display/coursework.png";
		images[4].src = "../Resources/Desktop/Display/eclipse.png";
		images[5].src = "../Resources/Desktop/Display/ghci.png";
		images[6].src = "../Resources/Desktop/Display/gitkraken.png";
		images[7].src = "../Resources/Desktop/Display/gitkraken2.png";
		images[8].src = "../Resources/Desktop/Display/intellij.png";
		images[9].src = "../Resources/Desktop/Display/latex.png";
		images[10].src = "../Resources/Desktop/Display/latex2.png";
		images[11].src = "../Resources/Desktop/Display/matlab.png";
		images[12].src = "../Resources/Desktop/Display/putty.png";
		images[13].src = "../Resources/Desktop/Display/putty2.png";
		images[14].src = "../Resources/Desktop/Display/vmware.png";
		images[15].src = "../Resources/Desktop/Display/vscode.png";
		images[16].src = "../Resources/Desktop/Display/matlab2.png";

  });
