//setup for notes
var notes = ['A','B','C','D','E','F','G'];
var accidentals = ['b','#'];
var notesFull = [];
var oneToTwo;

for (var i = 0; i < notes.length; i++) {
  notesFull.push(notes[i] + accidentals[0]);
  notesFull.push(notes[i]);
  notesFull.push(notes[i] + accidentals[1]);
}
notesFull.splice(5,2);
notesFull.splice(12,2);

var intervals = ["Unison", "minor2", "Major2", "minor3", "Major3", "Perfect4", "Tritone", "Perfect5", "minor6",
                             "Major6", "minor7", "Major7"];

//Gives set of 2 notes
function game() {
  var setIntOne = Math.floor(Math.random()*notesFull.length);
  var setIntTwo = Math.floor(Math.random()*notesFull.length);
  var oneToTwo = setIntOne - setIntTwo;
  if (oneToTwo < 0) {
    oneToTwo = oneToTwo * -1;
  }
  var firNote = notesFull[setIntOne];
  var secNote = notesFull[setIntTwo];
  if ((firNote[1] === "b") && (secNote[1] === "#")) {
    secNote = notesFull[setIntTwo + 1];
  }
  if ((firNote[1] === "b") && (secNote[1] === "#")) {
    secNote = notesFull[setIntTwo - 1];
  }
  var ques = "What is the interval going <strong>UP</strong> from " + firNote + " to " + secNote + "?";
  document.getElementById("ques").innerHTML = ques;
}

//Checks if usrInp is correct
function check() {
  var resp;
  var x = document.getElementById("usrInp").value;
  if (x === intervals[oneToTwo]) {
    resp = "Correct!";
  } else if (x === "null") {
    resp = "Please input an interval";
  } else {
    resp = "Sorry! Try again";
  }
  document.getElementById("resp").innerHTML = resp;
}
