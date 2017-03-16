var days = 0;
var num = 0.01;

while (days >= 0){
  days = days + 1
  num = num * 2
  if (days == 30) {
    console.log("The Reward was $" + num + " at the days.");
  }
  if (num >= 10000 && num <= 11000) {
    console.log("It took " + days + " days to reach " + num);
  }
  if (num >= 1000000000) {
    console.log("It took " + days + " days to reach " + num);
    break;
  }
}
