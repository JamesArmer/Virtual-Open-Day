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

<body onload="ready(2)">

<?php include("../Header/header.html");?>

  <nav class="sidenav">
     <a href="./programming.php">Home</a>
     <a href="./task1.php">Task 1</a>
     <a href="./task2.php" class = "active">Task 2</a>
     <a href="./task3.php">Task 3</a>
  </nav>

  <div class = "main-body">
    <h2 id = "ht2"> Task 2 </h2>
    <p id = "p3"> Next for Task 2 we're going to introduce some basic variables and add them together in our new calculate() function. Two variables have already
        been declared for you, op1 and op2 (standing for operand 1 and 2 respectively). The "let" keyword just means that we've declared a variable within the function,
  	  and they can't be accessed outside of our calcuate function - it's often good practice in most coding languages to control where your variables can be accessed from.
  	  Now all you need to do is make each of these variables equal to a number using the basic assignment operator "=" followed by a semi-colon at the end of each statement.
  	  Once you have done that we're going to use the alert() function again to print the sum out (we're going to use add for this tutorial but feel free to try any other
  	  operator you like!). Within the brackets simply type the first variable "+" the second variable and you should get an output similar to the one on the home page (using 1+2).</p>
  </div>

<div id='container'>
  <div id="editor">
  </div>

  <iframe id='iframe' frameBorder="0">
  </iframe>
</div>

</body>

</html>
