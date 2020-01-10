<!-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
-		This file is originally liscensed by google, created using
-		marzipano tool from marzipano.net
-		This file is modified for building *virtual tour* system
-		for university of nottingham computer science second year
-		group project group9
-
-		**g52grp____group9**
-
-  	Modifications:
-		* collapsible scene list
-		* modified view control buttons
-
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -->

<!DOCTYPE html>
<html>
<head>
	<title>School of Computer Science</title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="target-densitydpi=device-dpi, width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui" />
	<style> @-ms-viewport { width: device-width; } </style>

	<link rel="stylesheet" href="../CSS/tour/style.css">
	<!-- css files for info hotspot -->
	<link rel="stylesheet" href="../CSS/tour/tooltip.css">
	<link rel="stylesheet" href="../CSS/tour/hintspot.css">
	<!-- css files for collapsible scene list -->
	<link rel="stylesheet" href="../CSS/tour/collapsible.css">

    <link rel="stylesheet" href="../Lib/marzipano/reset.min.css">


</head>
<body class="multiple-scenes view-control-buttons">
	<!-- main body of the tour : pano -->
	<div id="pano"></div>

	<!-- scene list separated by floor -->
	<div id="sceneList">
		<ul class="scenes">

			<button class="collapsible">Floor A</button>
			<div class = "content">
				<a href="#" class="scene" data-id="10-a_s">
					<li class="text">Stair</li>
				</a>
				<a href="#" class="scene" data-id="0-at_m2">
					<li class="text">CS Atrium</li>
				</a>
				<a href="#" class="scene" data-id="14-a32_m">
					<li class="text">A32</li>
				</a>
				<a href="#" class="scene" data-id="7-hub">
					<li class="text">the Hub</li>
				</a>
				<a href="#" class="scene" data-id="3-fl">
					<li class="text">FPL</li>
				</a>
				<a href="#" class="scene" data-id="12-reception">
					<li class="text">Reception</li>
				</a>
			</div>

			<button class="collapsible">Floor B</button>
			<div class = "content">
				<a href="#" class="scene" data-id="3-b_s">
					<li class="text">Stair</li>
				</a>
				<a href="#" class="scene" data-id="10-mix_2">
					<li class="text">MRL</li>
				</a>
				<a href="#" class="scene" data-id="15-b_lab1">
					<li class="text">B53</li>
				</a>
				<a href="#" class="scene" data-id="14-b_lab2">
					<li class="text">B52</li>
				</a>
			</div>

			<button class="collapsible">Floor C</button>
			<div class = "content">
				<a href="#" class="scene" data-id="0-c_s">
					<li class="text">Stair</li>
				</a>
				<a href="#" class="scene" data-id="20-c_mroom">
					<li class="text">C1</li>
				</a>
				<a href="#" class="scene" data-id="19-c_lab">
					<li class="text">C11</li>
				</a>
				<a href="#" class="scene" data-id="1-c50">
					<li class="text">C50</li>
				</a>
			</div>

		</ul>
	</div>

	<div id="titleBar">
		<h1 class="sceneName"></h1>
	</div>

	<a href="#" id="autorotateToggle">
		<img class="icon off" src="../Resources/Tour/img/play.png">
		<img class="icon on" src="../Resources/Tour/img/pause.png">
	</a>

	<a href="#" id="fullscreenToggle">
		<img class="icon off" src="../Resources/Tour/img/fullscreen.png">
		<img class="icon on" src="../Resources/Tour/img/windowed.png">
	</a>

	<a href="#" id="sceneListToggle">
		<img class="icon off" src="../Resources/Tour/img/expand.png">
		<img class="icon on" src="../Resources/Tour/img/collapse.png">
	</a>

    <a href="./tour.php" id="exitToggle">
        <img class="icon" src="../Resources/Tour/img/exit.png">
    </a>

	<a href="#" id="viewUp" class="viewControlButton viewControlButton-1">
		<img class="icon" src="../Resources/Tour/img/up.png">
	</a>
	<a href="#" id="viewDown" class="viewControlButton viewControlButton-2">
		<img class="icon" src="../Resources/Tour/img/down.png">
	</a>
	<a href="#" id="viewLeft" class="viewControlButton viewControlButton-3">
		<img class="icon" src="../Resources/Tour/img/left.png">
	</a>
	<a href="#" id="viewRight" class="viewControlButton viewControlButton-4">
		<img class="icon" src="../Resources/Tour/img/right.png">
	</a>
	<!-- class tags are removed for ViewIn and ViewOut as these two button are not needed-->
	<a href="#" id="viewIn"></a>
	<a href="#" id="viewOut"></a>

	<!-- External Library from marzipano.net -->
	<script src="../Lib/marzipano/es5-shim.js"></script>
	<script src="../Lib/marzipano/eventShim.js"></script>
	<script src="../Lib/marzipano/classList.js"></script>
	<script src="../Lib/marzipano/requestAnimationFrame.js" ></script>
	<script src="../Lib/marzipano/screenfull.min.js" ></script>
	<script src="../Lib/marzipano/bowser.min.js" ></script>
	<script src="../Lib/marzipano/marzipano.js" ></script>

	<!-- note: the order to include js files are important-->
	<!-- data.js stores all information needed to create the tour-->
	<script src="../JS/tour/data.js"></script>
	<!-- index.js created the tour using the data in data.js -->
	<script src="../JS/tour/index.js"></script>
	<script src="../JS/tour/tour.js"></script>
    <!-- bootstrap: site tour-->
    <link href="../Lib/Bootstrap/bootstrap-tour-standalone.min.css" rel="stylesheet">
    <script src="../Lib/Bootstrap/jquery.min.js"></script>
    <script src="../Lib/Bootstrap/bootstrap-tour-standalone.min.js"></script>
    <script src="../JS/home.js"></script>


</body>
</html>
