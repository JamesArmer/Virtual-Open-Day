<!DOCTYPE html>
<html>

<head>
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
  <link href="../CSS/student.css" rel="stylesheet"/>
  <link href="../CSS/global.css" rel="stylesheet"/>
  <link href="../CSS/header.css" rel="stylesheet"/>
  <link href="../CSS/yearOne.css" rel="stylesheet"/>
  <link href="../Lib/Bootstrap/bootstrap-tour-standalone.min.css" rel="stylesheet">
  <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="../Lib/Bootstrap/jquery.min.js"></script>
  <script src="../Lib/Bootstrap/bootstrap-tour-standalone.min.js"></script>
  <script src="../JS/student.js"></script>
</head>

<body>
  <?php include("../Header/header.html");?>

  <nav class="sidenav">
    <a href="./student.php" id = "studentSide">Video</a>
    <a href="./timetable.php" id = "timetableSide" class = "active">Timetable</a>
    <a href="./modules.php" id = "modulesSide">Module</a>
    <a href="./assessment.php" id = "courseworkSide">Assessment</a>
  </nav>

 <div id="pageSpace">
    <select onchange="location=this.value;">
      <option value="./timetable.php">Year One Autumn</option>
      <option value="./yearOneSpring.php">Year One Spring</option>
      <option value="./yearTwoAut.php">Year Two Autumn</option>
      <option value="./yearTwoSpring.php">Year Two Spring</option>
    </select>

	<div id="help">
		<img id = "help-icon" src = "../Resources/help.png"/>
	</div>

    <br>
    <!-- Overlay -->
    <div id="overlay" onclick="overlayPress()">
        <img id="display" class="display"/>
    </div>

    <!-- time-table -->
    <div class="content">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center mb30">
                    <h2>Year One Autumn Timetable</h2>
                </div>
                <div class="table-responsive">
                    <table class="timetable table table-striped ">
                        <thead>
                            <tr class="text-center">
                                <th scope="col"></th>
                                <th scope="col">Monday</th>
                                <th scope="col">Tuesday</th>
                                <th scope="col">Wednesday</th>
                                <th scope="col">Thursday</th>
                                <th scope="col">Friday</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">09:00 AM - 10:00 AM</th>
                                <td></td>
                                <td class="timetable-class" onclick="showModule('MCS')" id="module-example"><a>Mathematics for computer scientists</a><br>-Tutorial</td>
                                <td class= "timetable-class" onclick="showModule('CSF')">Computer Fundamentals<br>-Lecture</td>
                                <td class= "timetable-class" onclick="showModule('PGA')">Programming and Algorithms<br>-Labs</td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">10:00 AM - 11:00 AM</th>
                                <td></td>
                                <td></td>
                                <td class= "timetable-class" onclick="showModule('PGA')">Programming and Algorithms<br>-Lecture</td>
                                <td class="timetable-class" onclick="showModule('CSF')">Computer Fundamentals<br>-Lecture</td>
                                <td class="timetable-class">Tutorial with Personal Tutor</td>
                            </tr>
                            <tr>
                                <th scope="row">11:00 AM - 12:00 PM</th>
                                <td class= "timetable-class" onclick="showModule('MCS')">Mathematics for Computer Scientists<br>-Lecture</td>
                                <td class="timetable-class">Computer Science First Year Tutorial</td>
                                <td></td>
                                <td></td>
                                <td class="timetable-class" onclick="showModule('PGA')">Programming and Algorithms<br>-Tutorial</td>
                            </tr>
                            <tr>
                                <th scope="row">12:00 PM - 1:00 PM</th>
                                <td class="timetable-class" onclick="showModule('SYS')">Systems and Architecture<br>-Lecture</td>
                                <td></td>
                                <td></td>
                                <td class="timetable-class" onclick="showModule('SYS')">Systems and Architecture<br>-Lecture</td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">1:00 PM - 2:00 PM</th>
                                <td></td>
                                <td class= "timetable-class" onclick="showModule('CSF')">Computer Fundamentals<br>-Labs</td>
                                <td></td>
                                <td></td>
                                <td class= "timetable-class" onclick="showModule('PGA')">Programming and Algorithms<br>-Lecture</td>
                            </tr>
                            <tr>
                                <th scope="row">2:00 PM - 3:00 PM</th>
                                <td></td>
                                <td class= "timetable-class" onclick="showModule('CSF')">Computer Fundamentals<br>-Labs</td>
                                <td></td>
                                <td class= "timetable-class" onclick="showModule('SYS')">Systems and Architecture<br>-Labs</td>
                                <td class= "timetable-class" onclick="showModule('PGA')">Programming and Algorithms<br>-Lecture</td>
                            <tr>
                                <th scope="row">3:00 PM - 4:00 PM</th>
                                <td></td>
                                <td class= "timetable-class" onclick="showModule('PGA')">Programming and Algorithms<br>-Labs</td>
                                <td></td>
                                <td class= "timetable-class" onclick="showModule('SYS')">Systems and Architecture<br>-Labs</td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">4:00 PM - 5:00 PM</th>
                                <td></td>
                                <td class= "timetable-class" onclick="showModule('PGA')">Programming and Algorithms<br>-Labs</td>
                                <td></td>
                                <td></td>
                                <td class= "timetable-class" onclick="showModule('SYS')">Systems and Architecture<br>-Lecture</td>
                            </tr>
                            <tr>
                                <th scope="row">5:00 PM - 6:00 PM</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- timetable -->
            </div>
        </div>
    </div>
    <!-- /.time-table -->
</div>


</body>
</html>
