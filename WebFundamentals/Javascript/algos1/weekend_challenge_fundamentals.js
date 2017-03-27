var name = prompt("Please enter your first name");
var play = confirm("Hello " + name + " do you want to take a quiz?");
var answers = 0;
var correct = 0;

if (play == true ) {
  loop();
}

function quiz() {
  prompt("who shot first")
  var keepPlaying = confirm("Alright " + name + " are you ready for a question?")
}

function loop() {
  var i = 1
  while (i < 30) {
    console.log(i);
  }
}
