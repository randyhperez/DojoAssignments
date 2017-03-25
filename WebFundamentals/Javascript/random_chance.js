function slot(quarters){
  for (var i = quarters; i >= 1; i--) {
    var chance = Math.ceil(Math.random() * 100)
    if (i - 1 == 0) {
      console.log("You are out of quarters duder");
    }
    else if (chance <= 1) {
      var x = Math.floor(Math.random() * 50) +51;
      i = i + x;
      console.log("You won " + x + " quarters!!!");
    }
    else if (i >=1 ){
      console.log("You didn't win :/ and have " + (i - 1) + " quarters left");
    }
  }
}
// enter amount to run slot machine.
slot(80)
