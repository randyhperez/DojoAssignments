function clockHandAngles(seconds) {
  var secondHand = (seconds % 60) * 6;
  var minuteRev = seconds / 60;
  var minuteHand = (minuteRev % 60) * 6;
  var hourRev = minuteRev / 12;
  var hourHand = (hourRev % 60) * 6;
  console.log("Hour Hand: " + hourHand + " degs. Minute Hand: " + minuteHand + " degs. Second Hand: " + secondHand + " degs.");
}

clockHandAngles(119730);
