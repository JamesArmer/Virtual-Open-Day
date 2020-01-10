<?php
session_start();
$searchTerm = $_GET['searchInput'];

$mysqli = new mysqli('10.169.0.239', 'virtualo3_cs', 'Munch-666', 'virtualo3_cs');
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

$searchTerm = $mysqli->real_escape_string($searchTerm);

$_SESSION['searchSQL'] = "SELECT * FROM cs_questions WHERE question LIKE '%$searchTerm%' OR answer LIKE '%$searchTerm%' ORDER BY qID"; // Creates a session variable for the SQL for the search query.
$_SESSION['hasSearched'] = 1;

header("location: q&a.php");
 ?>
