function ready(task){
	setupEditor(task);
	update();
}

function update()
{
	var idoc = document.getElementById('iframe').contentWindow.document;

	idoc.open();
	idoc.write(editor.getValue());
	idoc.close();
}

function setupEditor(task)
{
  window.editor = ace.edit("editor");
  editor.setTheme("ace/theme/monokai");
  editor.getSession().setMode("ace/mode/html");

  var script, code;

  switch(task){
    case 1:
      script = "<script>\nfunction printMessage()\n{\n\n}\n//Remember to add a '/' before the second script to run\n<script>";
      code = "<!DOCTYPE html>\n<html>\n<head>\n</head>\n\n<body>\n<button type='button' onclick='printMessage()'>Print</button>\n</body>\n\n"+script+"\n\n</html>";
      break;
    case 2:
      script = "<script>\nfunction calculate()\n{\nlet op1, op2;\n\n}\n//Remember to add a '/' before the second script to run\n<script>";
      code = "<!DOCTYPE html>\n<html>\n<head>\n</head>\n\n<body>\n<button type='button' onclick='calculate()'>Add</button>\n</body>\n\n"+script+"\n\n</html>";
      break;
    case 3:
      script = "<script>\nfunction checkAnswer()\n{\nlet answer = prompt('How many states can a binary bit have?', '');\n\n}\n//Remember to add a '/' before the second script to run\n<script>";
      code = "<!DOCTYPE html>\n<html>\n<head>\n</head>\n\n<body>\n<button type='button' onclick='checkAnswer()'>Prompt</button>\n</body>\n\n"+script+"\n\n</html>";
      break;
  }

  editor.setValue(code,1); //1 = moves cursor to end

  editor.getSession().on('change', function() {
    update();
  });

  editor.focus();


  editor.setOptions({
    fontSize: "14pt",
    showLineNumbers: true,
    showGutter: false,
    vScrollBarAlwaysVisible:true,
    enableBasicAutocompletion: false, enableLiveAutocompletion: false
  });

  editor.setShowPrintMargin(false);
  editor.setBehavioursEnabled(false);
}
