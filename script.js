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

var intervals = ["U", "m2", "M2", "m3", "M3", "P4", "T", "P5", "m6",
                             "M6", "m7", "M7"];

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
  else if ((firNote[1] === "#") && (secNote[1] === "b")) {
    secNote = notesFull[setIntTwo - 1];
  }
  var ques = "What is the interval going <strong>UP</strong> from " + firNote + " to " + secNote + "?";
  document.getElementById("ques").innerHTML = ques;
}

//Checks if usrInp is correct
function check(buttonElement) {
  var corInt = intervals[oneToTwo];
  var buttonClicked = buttonElement.id;
  if (buttonClicked === corInt) {
    document.getElementById('resp').innerHTML = 'Correct!';
  }
  else {
    document.getElementById('resp').innerHTML = 'Sorry try again';
  }
}
