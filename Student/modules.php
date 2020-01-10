<!DOCTYPE html>
<html>

<head>
  <link href="../CSS/student.css" rel="stylesheet"/>
  <link href="../CSS/global.css" rel="stylesheet"/>
  <link href="../CSS/header.css" rel="stylesheet"/>
  <script src="../JS/student.js"></script>
</head>

<body>
  <?php include("../Header/header.html");?>

  <div class="sidenav">
     <a href="./student.php" id = "studentSide">Video</a>
     <a href="./timetable.php" id = "timetableSide">Timetable</a>
	 <a href="./modules.php" id = "moduleSide" class = "active">Modules</a>
     <a href="./assessment.php" id = "courseworkSide">Assessment</a>
  </div>

  <div id="pageSpace">
    <select id="yearChoice" onchange="location=this.value;">
      <option value="./modules.php">Year One Modules</option>
      <option value="./yearTwoModules.php">Year Two Modules</option>
    </select>

    <select id="moduleChoice" onchange="changeModule()">
      <option value="CSF">CSF - Computer Fundamentals</option>
      <option value="MCS">MCS - Maths for Computer Science</option>
      <option value="PGA">PGA - Programming & Algorithms</option>
      <option value="SYS">SYS - Systems & Architecture</option>
      <option value="DBI">DBI - Databases & Interfaces</option>
      <option value="FAI">FAI - Fundamentals of Artificial Intelligence</option>
      <option value="FSE">FSE - Software Engineering</option>
      <option value="PGP">PGP - Programming Paradigms</option>
    </select>

    <br>
    <img id = "moduleInfo" src="../Resources/Student/Modules/CSF.png">

  </div>

</body>
</html>
