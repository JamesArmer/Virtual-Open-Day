<!DOCTYPE html>
<html>

<head>
  <link href="../CSS/programming.css" rel="stylesheet"/>
  <link href="../CSS/global.css" rel="stylesheet"/>
  <link href="../CSS/header.css" rel="stylesheet"/>
  <link href="../CSS/programming.css" rel="stylesheet"/>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.9/ace.js"></script>
  <script src="../JS/programming.js"></script>
</head>

<body onload="ready(1)">

<?php include("../Header/header.html");?>

  <nav class="sidenav">
     <a href="./programming.php">Home</a>
     <a href="./task1.php" class = "active">Task 1</a>
     <a href="./task2.php">Task 2</a>
     <a href="./task3.php">Task 3</a>
  </nav>

  <div class = "main-body">
    <h2 id = "ht1"> Task 1 </h2>
    <p id = "p2"> For the first task we only require you to print "Hello world!" as an alert to the user. This is a classic first tutorial in any language
  	  (some of you may have done this before in other languages) as it gives you the basic ability of printing something out. The alert()
  	  function is used to do this inside the printMessage() function within the script part of the webpage, which you should be able to see
  	  below. Then inside the brackets of the alert, simply type the text you want to print in quotation marks "".
  	  See the home page for an example answer.</p>
  </div>


<div id='container'>
  <div id="editor">
  </div>

  <iframe id='iframe' frameBorder="0">
  </iframe>
</div>

</body>

</html>
