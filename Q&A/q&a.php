<!DOCTYPE html>
<html>

<head>
  <link href="../CSS/q&a.css" rel="stylesheet"/>
  <link href="../CSS/global.css" rel="stylesheet"/>
  <link href="../CSS/header.css" rel="stylesheet"/>
  <script src="../JS/q&a.js"></script>

  <link rel="stylesheet" href="https://widget.pandorabots.com/prod/pb-widget.css"></link>
  <script src="https://widget.pandorabots.com/prod/pb-widget.js" type="text/javascript"></script>
</head>

<body>
  <?php include("../Header/header.html");

  //MySQL setup.

  session_start();

  if(!isset($_COOKIE['cat'])) {
    setcookie('cat', 'All');
    $_COOKIE['cat'] = 'All';
  }

  if(!isset($_SESSION['hasSearched'])){
    $_SESSION['hasSearched'] = 0;
  }

  $mysqli = new mysqli('10.169.0.239', 'virtualo3_cs', 'Munch-666', 'virtualo3_cs');
  // $mysqli = new mysqli('localhost', 'root', '', 'questions');
  if ($mysqli->connect_error) {
      die("Connection failed: " . $mysqli->connect_error);
  }

  if($_COOKIE['cat'] != "All"){ // Changes SQL based on which category is being viewed.
    $sql = "SELECT * FROM cs_questions WHERE category = '" . $_COOKIE['cat'] . "'";
  }else{
    $sql = "SELECT * FROM cs_questions";
  }

  if($_SESSION['hasSearched'] == 1){ // Changes the SQL if a search term has been used.
    $sql = $_SESSION['searchSQL'];
    $_SESSION['hasSearched'] = 0;
  }

  $allQuestions = $mysqli->query($sql);
  while ($record = $allQuestions->fetch_assoc()) { // Used to hold which questions have currently been upvoted in the current session.
    // Cookie name: qID.
    // Cookie value: 0 for not upvoted, 1 for upvoted.
    if(!isset($_COOKIE[$record['qID']])) {
      setcookie($record['qID'], 0);
      $_COOKIE[$record['qID']] = 0;
    }
  }
  $allQuestions = $mysqli->query($sql);

  $sql = "SELECT DISTINCT category FROM cs_questions ORDER BY category"; // Auto-creating category menu.
  $allCategories = $mysqli->query($sql);
?>

 <!-- HTML main body -->

  <div id = "categories" class="sidenav">
    <a onclick="selectCategory('All')"><p>All</p></a>
    <?php while ($record = $allCategories->fetch_assoc()) {
    echo '<a onclick = "selectCategory(\''.$record['category'].'\')"><p>'.$record['category'].'</p></a>';
    }?>
  </div>

  <div id="mainBody">
    <div id="overlay" onclick="overlayPress()">
      <img id="display" class="display"/>
    </div>

    <h1> <?=$_COOKIE['cat']?> Questions</h1>
    <div id="sortingButtons">
      <form action="search.php" method="GET">
        <input id="Search" type="text" placeholder="Search..." name="searchInput"></input>
        <input id="searchButton" type="submit" onclick="location.href='search.php'"></input>
      </form>
      <button class="questionButton" onclick="sortTable('questionsTable', 0, 'desc')">Sort By Default</button>
      <button class="questionButton" onclick="sortTable('questionsTable', 3, 'asc')">Sort By Popularity</button>
    </div>
    <div id="tableDiv">
      <table id = "questionsTable">
        <thead>
          <th></th><th></th><th></th><th></th>
        </thead>
        <?php while ($record = $allQuestions->fetch_assoc()) {?>
        <tr>
          <?php
          echo '<td class="idNumbers">'.$record['qID'].'</td>';

          if ($record['qID'] != 2){
            echo '<td class = "question" id = "q'.$record['qID'].'">Q: '.$record['question'].'<br>A: '.$record['answer'].'</td>';
          }else{
            echo '<td class = "question" id = "q'.$record['qID'].'">Q: '.$record['question'].'<br>A: <button class="questionButton" onClick="progress()"> Find out here</button> </td>';
          }

          if($_COOKIE[$record['qID']] == 1){
            echo '<td id="vote'.$record['qID'].'"> <form action ="voting.php" method="post"> <input class="blue" type="submit" name="id" value=-'.$record['qID'].'> </form> </td>';
          }else{
            echo '<td> <form action ="voting.php" method="post"> <input class="grey" type="submit" name="id" value='.$record['qID'].'> </form> </td>';
          }

          echo '<td>'.$record['votes'].'</td>';?>
        </tr>
        <?php }?>
      </table>
    </div>
  </div>

  <!-- Web Widget -->
  <div id="pb-widget"></div>
</body>
</html>
