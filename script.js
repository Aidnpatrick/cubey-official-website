function showInput() {
  var userInput = document.getElementById('userInput').value.toLowerCase(); ;

  var x = ["stbg", "slime fighter", "cubey | official website", "facebook simulator", "gadgets", "secret docs"];
  var y = 0;
  var recorder = 0;
  for(var i = 0; i < x.length; i++) {
    recorder++;
    if(userInput === x[i]) {
      y = 1;
      break;
    }
  }


  if(y === 1) {
    window.location.href = "#" + recorder;
    document.getElementById("good_output").innerHTML = "Redirecting...";
    elementToRemove.remove("bad_output");
  }


  else {
    document.getElementById("bad_output").innerHTML = "Invalid project name, please try again.";
    element.remove("good_output");
  }
}

function checkEnter(event) {
  if(event.key === "Enter") {
    showInput();
  }
}

function hideDiv() {
  document.getElementById('myDiv').style.display = 'none';
}