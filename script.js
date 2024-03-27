function showInput() {
  var userInput = document.getElementById('userInput').value.toLowerCase(); ;

  var x = ["stbg", "slime fighter", "cubey | official website", "facebook simulator", "gadgets", "secret docs", "random number bubble sorting"];
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
    document.getElementById("bad_output").innerHTML = "";
  }

  else if(userInput != "" && y == 0) {
    document.getElementById("bad_output").innerHTML = "Invalid project name, please try again.";
    document.getElementById("good_output").innerHTML = "";
  }

  else if(userInput == "") {
    document.getElementById("bad_output").innerHTML = "Please enter something";
    document.getElementById("good_output").innerHTML = "";
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