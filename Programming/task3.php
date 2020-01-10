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

<body onload="ready(3)">

<?php include("../Header/header.html");?>

  <nav class="sidenav">
     <a href="./programming.php">Home</a>
     <a href="./task1.php">Task 1</a>
     <a href="./task2.php">Task 2</a>
     <a href="./task3.php" class = "active">Task 3</a>
  </nav>

  <div class = "main-body">
    <h2 id = "ht3"> Task 3 </h2>
    <p id="p4"> In the third and final task we're going to introduce the most basic conditional operator the "if" statement. It has similar syntax to a function with an if statement
        having the structure of: <br><br> if(<i>condtition</i>) <br>{<br><i>code to be executed if the condition is met, otherwise ignore it</i><br>}<br><br>
  	  In our case we're going to be comparing a variable to an integer for our condition, meaning that we will have to use the "==" operator to compare the two values (remember
  	  a single "=" is used to assign a value to a variable). We'll ask the user a question using a prompt and store that value in the variable answer, then compare that answer
  	  to 2, the correct answer. For the code we need to tell the user if they got the question right, so let's use the same alert function to tell them. See the home page for
        example outputs.</p>
  </div>

    <div id='container'>
      <div id="editor">
      </div>

      <iframe id='iframe' frameBorder="0">
      </iframe>
    </div>

</body>

</html>
