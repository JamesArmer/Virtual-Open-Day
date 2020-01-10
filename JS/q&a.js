var progressCounter = 1;

function selectCategory(cat){
  document.cookie = "cat=" + cat;
  window.location.replace("q&a.php");
}

function progress(){
  document.getElementById("display").src="../Resources/Q&A/progression" + progressCounter + ".png"
  document.getElementById("overlay").style.visibility="visible";
}
function overlayPress(){
  if(progressCounter == 3){
    progressCounter = 1;
    document.getElementById("overlay").style.visibility="hidden";
  }else{
    progressCounter++;
    progress();
  }

}

function sortTable(tableID, heading, direction){
  var table = document.getElementById(tableID);
  var tableRows = table.getElementsByTagName("tr");  //Gets a list of all rows from the inputted table.
  var item1, item2;
  var rowCount = 1; //Used to keep a track of which row is being checked.
  var curRow = 0;

  if(direction == 'asc'){
    var itemCheck = function(item1, item2){
      return firstIsLower(item1, item2);
    };
    
  }else if(direction == 'desc'){
    var itemCheck = function(item1, item2){
      return !firstIsLower(item1, item2);
    };
  }

  //Insertion Sort
      while(rowCount < tableRows.length - 1){ //Insert every row into the correct place
        curRow = rowCount;
        item1 = tableRows[curRow].getElementsByTagName("td")[heading];
        item2 = tableRows[curRow + 1].getElementsByTagName("td")[heading];
        while(curRow > 0 && itemCheck(item1, item2)){ //itemCheck is to see if the first item is lower
          tableRows[curRow].parentNode.insertBefore(tableRows[curRow + 1], tableRows[curRow]); //Swap the 2 rows
          tableRows = table.getElementsByTagName("tr");
          curRow--;
          item1 = tableRows[curRow].getElementsByTagName("td")[heading];
          item2 = tableRows[curRow + 1].getElementsByTagName("td")[heading]; //Update the current 2 items from the changed table
        }
        rowCount++;
  }
}

  function firstIsLower(item1,item2){
    a = item1.innerHTML;
    b = item2.innerHTML;
    if(!(isNaN(a) || isNaN(b))){ //Necessary to prevent string comparison, where 100 < 20 < 3
      if(a == Math.min(a,b)){
        return true
      }else{
        return false;
      }
    }else if(a.toLowerCase() <= b.toLowerCase()){
      return true;
    }else{
      return false;
    }
  }
