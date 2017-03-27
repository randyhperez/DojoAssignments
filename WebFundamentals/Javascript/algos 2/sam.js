function slotMachine(quarters) {
 for (var i = quarters; i >= 1; i--) {
  var chance = Math.ceil(Math.random() * 100);
  if (i - 1 == 0) {
    console.log("You are out of quarters!");
  }
  else if (chance <= 1) {
    var amountWon = Math.floor(Math.random() * 50) + 51;
    console.log("You had " + i + " quarters. You won " + amountWon + " quarters. Now you have "+ (i += amountWon) + " quarters. Woohoo bra!");
    i += amountWon;
  }
 }
}

slotMachine(100);
