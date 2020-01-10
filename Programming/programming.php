<!DOCTYPE html>
<html>

<head>
  <link href="../CSS/programming.css" rel="stylesheet"/>
  <link href="../CSS/global.css" rel="stylesheet"/>
  <link href="../CSS/header.css" rel="stylesheet"/>

  <link rel="stylesheet" href="https://widget.pandorabots.com/prod/pb-widget.css"></link>
  <script src="https://widget.pandorabots.com/prod/pb-widget.js" type="text/javascript"></script>
</head>

<body>
  <?php include("../Header/header.html");?>

  <nav class="sidenav">
     <a href="./programming.php" class = "active">Home</a>
     <a href="./task1.php">Task 1</a>
     <a href="./task2.php">Task 2</a>
     <a href="./task3.php">Task 3</a>
  </nav>

  <div class = "main-body">

    <h1>Welcome to our online programming session!</h1>
    <p>Our online programming session will hopefully show you the very basics of Javascript, the programming language of the web. Javascript allows us to control the behaviour of a website, meaning that every time a website does something other just sit there and display information, you can bet that Javascript is probably involved. The dynamic nature of Javascript means that we can run code when a button is pressed, or when any other action happens for that matter - and yes that means we used lots of Javascript to build this website! Below are 3 basics tasks in Javascript that you will be able to run on our website to check you have done them correctly. However if you would like to take your interest further there are plenty of great resources online to help you, with a few of our favourite links below:</p>

     <p>Codecademy - <a href="https://www.codecademy.com/learn/introduction-to-javascript"> https://www.codecademy.com/learn/introduction-to-javascript</a> <br>
     Javascript.info - <a href="https://javascript.info/">https://javascript.info/</a>
    </p>

    <h2>Task 1 Example Output:</h2>
    <img class = "example-output" src="../Resources/task1.png">

    <h2>Task 2 Example Output:</h2>
    <img class = "example-output" src="../Resources/task2.png">

    <h2>Task 3 Example Outputs:</h2>
    <img class = "example-output" src="../Resources/task3a.png">
    <br>
    <img id = "final-image" class = "example-output" src="../Resources/task3b.png">

  </div>

  <!-- Web Widget -->
  <div id="pb-widget"></div>

</body>

</html>
