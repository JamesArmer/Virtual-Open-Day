<!DOCTYPE html>
<html>

<head>
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
  <link href="../CSS/student.css" rel="stylesheet"/>
  <link href="../CSS/global.css" rel="stylesheet"/>
  <link href="../CSS/header.css" rel="stylesheet"/>
  <link href="../CSS/assessment.css" rel="stylesheet"/>
  <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</head>

<body>
  <?php include("../Header/header.html");?>

  <nav class="sidenav">
    <a href="./student.php" id = "studentSide">Video</a>
    <a href="./timetable.php" id = "timetableSide">Timetable</a>
    <a href="./modules.php" id = "modulesSide">Module</a>
    <a href="./assessment.php" id = "courseworkSide" class = "active">Assessment</a>
  </nav>

<div id="pageSpace">
    <select onchange="location=this.value;">
      <option value="./assessment.php">Coursework</option>
      <option value="./exam.php">Exam</option>
    </select>

    <br>

    <h1> Example Coursework (First Year Programming and Algorithms) </h1>
  <div id="assessment">
      <div class="col-md-4">
          <div class="card mb-4 text-white bg-dark">
              <img class="card-img-top" src="../Resources/Student/Coursework/PGA1.png">
              <div class="card-body">
                  <h5 class="card-title">Above is a brief overview of the first coursework task for the PGA module which is coded in C.
              As you can see it involves creating a program to take a date as an input and output that date in three different formats.</h5>
              </div>
          </div>
      </div>

      <div class="col-md-4">
          <div class="card mb-4 text-white bg-dark">
              <img class="card-img-top" src="../Resources/Student/Coursework/PGA2.png">
              <div class="card-body">
                  <h5 class="card-title">The task is clearly outlined and in some tasks such as this one, example functions will be given to give students an idea what to do.
              This helps students new to coding to get used to structuring their pojects whereby each function has a specific role in the program.</h5>
              </div>
          </div>
      </div>

      <div class="col-md-4">
          <div class="card mb-4 text-white bg-dark">
              <img class="card-img-top" src="../Resources/Student/Coursework/PGA4.png">
          </div>
      </div>
      <div class="col-md-4">
          <div class="card mb-4 text-white bg-dark">
              <img class="card-img-top" src="../Resources/Student/Coursework/PGA5.png">
          </div>
      </div>
      <div class="col-md-4">
          <div class="card mb-4 text-white bg-dark">
              <img class="card-img-top" src="../Resources/Student/Coursework/PGA6.png">
          </div>
      </div>
      <div class="col-md-4">
          <div class="card mb-4 text-white bg-dark">
              <img class="card-img-top" src="../Resources/Student/Coursework/PGA3.png">
              <div class="card-body">
                  <h5 class="card-title">Above are also some functions given to the students, showing how they are coded meaning they have an idea how to complete the other functions.</h5>
                  <a href="./assessmentoutput.php" class="btn btn-outline-light btn-sm">Sample Outupt</a>
              </div>
          </div>
      </div>
    </div>
    
</div>

</body>
</html>
