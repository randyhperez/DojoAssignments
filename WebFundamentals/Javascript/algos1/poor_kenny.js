function whatHappensToday() {
  var deadKenny = Math.ceil(Math.random() * 100);
    if (deadKenny <= 10) {
      console.log("Death by Volcano");
    }
    else if (deadKenny >= 11 && deadKenny <= 25) {
      console.log("Death by Tsunami");
    }
    else if (deadKenny >= 26 && deadKenny <= 45) {
      console.log("Death by Earthquake");
    }
    else if (deadKenny >= 46 && deadKenny <= 70) {
      console.log("Death by blizzard");
    }
    else if (deadKenny >= 71) {
      console.log("Death by meteor");
    }
    else {
      console.log("Kenny lives this episode");
    }
}

whatHappensToday();
