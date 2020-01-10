<!DOCTYPE html>
<html>

<head>
  <link href="../CSS/student.css" rel="stylesheet"/>
  <link href="../CSS/global.css" rel="stylesheet"/>
  <link href="../CSS/header.css" rel="stylesheet"/>

  <link rel="stylesheet" href="https://widget.pandorabots.com/prod/pb-widget.css"></link>
  <script src="https://widget.pandorabots.com/prod/pb-widget.js" type="text/javascript"></script>
</head>

<body>
  <?php include("../Header/header.html");?>

  <nav class="sidenav">
     <a href="./student.php" class = "active" id = "studentSide">Video</a>
     <a href="./timetable.php" id = "timetableSide">Timetable</a>
     <a href="./modules.php" id = "modulesSide">Module</a>
     <a href="./assessment.php" id = "courseworkSide">Assessment</a>
  </nav>

  <video id="vid" width="896" height="504" controls = "controls">
    <source src="../Resources/Student/Video/student.mp4" type="video/mp4"/>
  </video>

  <!-- Web Widget -->
  <div id="pb-widget"></div>

</body>
</html>
