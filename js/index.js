//import { values } from "../node_test.js";
//var values = require('../node_test.js/values');

//<script type="text/javascript" src="../node_test.js"></script>

var text;

function clickSearch(){
    var textName = document.getElementById("tex").value;
    text = textName;
    alert(text);
}


function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("tex");
    filter = input.value.toUpperCase();
    ul = document.getElementById("target");
    li = ul.getElementsByTagName('li');
  
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

function notionOut(){
  for (var n in resp.results){
    console.log(values[n][0]);
  }
}