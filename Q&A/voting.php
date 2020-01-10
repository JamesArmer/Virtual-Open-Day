<?php

  $mysqli = new mysqli('10.169.0.239', 'virtualo3_cs', 'Munch-666', 'virtualo3_cs');
  if ($mysqli->connect_error) {
      die("Connection failed: " . $mysqli->connect_error);
  }

  $id = $_POST["id"]; // Negative numbers are sent through for if the question is currently upvoted, and needs this reversing.
  if($id < 1) {
    $dec = true;
    $id *= -1;
  }

  $sql = "SELECT * FROM cs_questions WHERE qID = '" . $id . "'";
  $query = $mysqli->query($sql);
  $result = $query->fetch_assoc();
  $numVotes = $result['votes'];

  if($dec){ // Means the question was upvoted, so clicking again removes your upvote.
    $numVotes -= 1;
    setcookie($id, 0);
  }else{
    setcookie($id, 1);
    $numVotes += 1;
  }

  $sql = "UPDATE cs_questions SET votes = '.$numVotes.' WHERE qID = '" . $id . "'";
  $mysqli->query($sql); // Update the vote counts.

  header("location:q&a.php");
?>
