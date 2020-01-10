<!DOCTYPE html>
<html>
<head>
  <link href="../CSS/desktop.css" rel="stylesheet"/>
  <link href="../CSS/global.css" rel="stylesheet"/>
  <link href="../CSS/header.css" rel="stylesheet"/>
  <link href="../Lib/Bootstrap/bootstrap-tour-standalone.min.css" rel="stylesheet">
  <script src="../Lib/Bootstrap/jquery.min.js"></script>
  <script src="../Lib/Bootstrap/bootstrap-tour-standalone.min.js"></script>
  <script src="../JS/desktop.js"></script>

  <link rel="stylesheet" href="https://widget.pandorabots.com/prod/pb-widget.css"></link>
  <script src="https://widget.pandorabots.com/prod/pb-widget.js" type="text/javascript"></script>
</head>

  <?php include("../Header/header.html");?>

  <div class="sidenav" id = "sidenav">
     <a onclick="changeToLinux()" id = "sidebar"><p>Linux</p></a>
     <a onclick="changeToWindows()"><p>Windows</p></a>
     <div id = "help">
       <img id = "help-icon" src = "../Resources/help.png"/>
     </div>
  </div>

  <!-- Overlay - displays information about the software -->
  <div id="overlay" onclick="overlayPress()">
    <img id="display" class="display">
    <video id="video"  class="display" controls = "controls">
      <source src="../Resources/Desktop/Display/coursework.mp4" type="video/mp4"/>
    </video>
  </div>

  <div class="desktop" id="linux">
    <img src="../Resources/Desktop/Icons/Linux/folder.png" class="icon" style="margin-top:3em;">
    <img src="../Resources/Desktop/Icons/Linux/executable.png" class="icon" style="margin-top:11em;" onclick="iconPress('coursework')"
        id = "exe">
    <img src="../Resources/Desktop/Icons/Linux/latex.png" class="icon" style="margin-top:19em;" onclick="iconPress('latex')">
    <img src="../Resources/Desktop/Icons/Linux/eclipse.png" class="icon" style="margin-top:27em;" onclick="iconPress('eclipse')">
    <img src="../Resources/Desktop/Icons/Linux/vscode.png" class="icon" style="margin-top:35em;" onclick="iconPress('vscode')">
  </div>

  <div class="desktop" id="windows">
    <img src="../Resources/Desktop/Icons/Windows/ghci.png" class="icon" style="margin-top:2em;" onclick="iconPress('ghci')">
    <img src="../Resources/Desktop/Icons/Windows/gitkraken.png" class="icon" style="margin-top:10em;" onclick="iconPress('gitkraken')">
    <img src="../Resources/Desktop/Icons/Windows/intellij.png" class="icon" style="margin-top:18em;" onclick="iconPress('intellij')">
    <img src="../Resources/Desktop/Icons/Windows/putty.png" class="icon" style="margin-top:26em;" onclick="iconPress('putty')">
    <img src="../Resources/Desktop/Icons/Windows/vmware.png" class="icon" style="margin-top:34em;" onclick="iconPress('vmware')">
    <!-- Second column - achieved by margin-left: 8em; -->
    <img src="../Resources/Desktop/Icons/Windows/matlab.png" class="icon" style="margin-top:2em; margin-left:8em;" onclick="iconPress('matlab')">
  </div>

  <img class="desktop" src="../Resources/Desktop/Backgrounds/linux.png" id="background"/>

  <!-- Web Widget -->
  <div id="pb-widget"></div>
</body>
</html>
