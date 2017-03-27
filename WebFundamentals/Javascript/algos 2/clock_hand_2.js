function clockHandAngles(seconds) {
  var secondHand = Math.floor((seconds % 60) * 6);
  var minuteRev = seconds / 60;
  var minuteHand = Math.floor((minuteRev % 60) * 6);
  var hourRev = minuteRev / 12;
  var hourHand = Math.floor((hourRev % 60) * 6);
  console.log("Hour Hand: " + hourHand + " degs. Minute Hand: " + minuteHand + " degs. Second Hand: " + secondHand + " degs.");
}

clockHandAngles(4569856.689653);
