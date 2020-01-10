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
    <select onchange="location=this.value;">
      <option value="./yearTwoModules.php">Year Two Modules</option>
      <option value="./modules.php">Year One Modules</option>
    </select>

    <select id="moduleChoice" onchange="changeModule()">
      <option value="GRP">GRP - Software Group Project</option>
      <option value="ACE">ACE - Algorithm Correctness and Efficiency</option>
      <option value="SWM">SWM - Software Maintance</option>
      <option value="OSC">OSC - Operating System and Concurrency</option>
      <option value="AIM">AIM - Artificial Intelligence Methods</option>
      <option value="LAC">LAC - Languages and Computation</option>
      <option value="CPP">CPP - C++ Programming</option>
    </select>

    <br>
    <img id = "moduleInfo" src="../Resources/Student/Modules/GRP.png">

  </div>

</body>
</html>
