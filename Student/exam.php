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
      <option value="./exam.php">Exam</option>
      <option value="./assessment.php">Coursework</option>
    </select>

    <br>
    <h1> Example Exam (First Year Computing Fundmentals) </h1>
    <div id="assessment">
      <div class="col-md-4">
          <div class="card mb-4 text-white bg-dark">
              <img class="card-img-top" src="../Resources/Student/Exam/Exam1.png">
              <div class="card-body">
                  <h5 class="card-title">Above is an example exam question from the first year module Computing Fundmentals which focuses on the basics of computers and networks.
      You will be asked to convert numbers between decimal, binary, octal and hexidecimal - all of which is covered on the course. You will also learn
    two's compliment (a way of showing negative numbers in binary) and how to perform arithmetic operations with it. </h5>
              </div>
          </div>
      </div>

      <div class="col-md-4">
          <div class="card mb-4 text-white bg-dark">
              <img class="card-img-top" src="../Resources/Student/Exam/Exam2.png">
              <div class="card-body">
                  <h5 class="card-title">The next question in the paper refers to networks, specifically the server-client relationship. You will learn how a server and client
                          communicate and specific functions needed to ensure they can communicate properly. </h5>
              </div>
          </div>
      </div>

      <div class="col-md-4">
          <div class="card mb-4 text-white bg-dark">
              <img class="card-img-top" src="../Resources/Student/Exam/Warning.png">
              <div class="card-body">
                  <h5 class="card-title">The university is has strict policies on examination conditions and plagiarism. Where anyone found cheating in an exam or plagiarising
                          in a piece of work can have a varying degree of punishment, with the most severe leading to a zero mark for the whole year. For more
              information on exams and plagiarism click the buttons below</h5>
                  <a href="https://www.nottingham.ac.uk/ttp/assessmentfeedback/exams/index.aspx" class="btn btn-outline-light btn-sm">Examination</a>
                  <a href="https://www.nottingham.ac.uk/ttp/assessmentfeedback/integrity/index.aspx" class="btn btn-outline-light btn-sm">Plagiarism</a>
              </div>
          </div>
      </div>
    </div>

</div>

</body>
</html>
