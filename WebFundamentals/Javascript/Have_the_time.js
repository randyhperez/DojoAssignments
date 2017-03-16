// set hour to number 1-12
var hour = 1;
// set minute 0-60
var minute = 10;
// set period to "AM" or "PM"
var period = "PM";

if (minute > 60 || minute < 0 || hour < 1 || hour > 12) {
  console.log(hour + ":" + minute + " " + period + " can't be shown on a clock dingus!");
}
else if (minute == 0) {
  if (period == "AM" && hour >= 4) {
    console.log("It's " + hour + " o'clock in the morning");
  }
  if (period == "PM" && hour == 12) {
    console.log("It's noon");
  }
  else if (period == "PM" && hour >= 1 && hour <= 4 ) {
    console.log("It's " + hour + " o'clock in the afternoon");
  }
  else if (period == "PM" && hour >= 5 && hour <= 7) {
    console.log("It's " + hour + " o'clock in the evening");
  }
  else if (period == "PM" && hour >= 8 || period == "AM" && hour <= 3) {
    console.log("It's " + hour + " o'clock at night");
  }
}
else if (minute == 5) {
  if (period == "AM" && hour >= 4) {
    console.log("It's a quarter after " + hour + " in the morning");
  }
  if (period == "PM" && hour == 12) {
    console.log("It's five after noon");
  }
  else if (period == "PM" && hour >= 1 && hour <= 4 ) {
    console.log("It's " + hour + ":" + minute + " in the afternoon");
  }
  else if (period == "PM" && hour >= 5 && hour <= 7) {
    console.log("It's five after " + hour + " in the evening");
  }
  else if (period == "PM" && hour >= 8 || period == "AM" && hour <= 3) {
    console.log("It's five after " + hour + " at night");
  }
}
else if (minute == 15) {
  if (period == "AM" && hour >= 4) {
    console.log("It's a quarter after " + hour + " in the morning");
  }
  if (period == "PM" && hour == 12) {
    console.log("It's a quarter after noon");
  }
  else if (period == "PM" && hour >= 1 && hour <= 4 ) {
    console.log("It's a quarter after " + hour +" in the afternoon");
  }
  else if (period == "PM" && hour >= 5 && hour <= 7) {
    console.log("It's a quarter after " + hour + " in the evening");
  }
  else if (period == "PM" && hour >= 8 || period == "AM" && hour <= 3) {
    console.log("It's a quarter after " + hour + " at night");
  }
}
else if (minute == 30) {
  if (period == "AM" && hour >= 4) {
    console.log("It's a  half past " + hour + " in the morning");
  }
  if (period == "PM" && hour == 12) {
    console.log("It's " + minute + " minutes after noon");
  }
  else if (period == "PM" && hour >= 1 && hour <= 4 ) {
    console.log("It's half past " + hour + " in the afternoon");
  }
  else if (period == "PM" && hour >= 5 && hour <= 7) {
    console.log("It's half past " + hour + " in the evening");
  }
  else if (period == "PM" && hour >= 8 || period == "AM" && hour <=3) {
    console.log("It's half past " + hour + " at night");
  }
}
else if (minute == 50) {
  if (period == "AM" && hour <= 10 && hour >=4) {
    hour++
    console.log("It's a 10 til " + hour + " in the morning");
  }
  if (period == "AM" && hour == 11) {
    console.log("It's 10 til noon");
  }
  else if (period == "PM" && hour >= 1 && hour <= 4 ) {
    hour++
    console.log("It's a 10 til " + hour + " in the afternoon");
  }
  else if (period == "PM" && hour >= 5 && hour <= 7) {
    hour++
    console.log("It's a 10 til " + hour + " in the evening");
  }
  else if (period == "PM" && hour >= 8 || period == "AM" && hour  <=3) {
    hour++
    console.log("It's a 10 til " + hour + " at night");
  }
}
else if (minute < 30) {
  if (period == "AM" && hour >= 4) {
    console.log("It's just after " + hour + " in the morning.");
  }
  else if (period == "PM"  && hour == 12 || hour <= 4) {
    console.log("It's just after " + hour + " in the noon.");
  }
  else if (period =="PM" && hour >= 5 && hour <=7) {
    console.log("It's just after " + hour + " in the evening.");
  }
  else if (period == "PM" && hour >=8 || period == "AM" && hour <= 3) {
    console.log("It's just after " + hour + " at night.");
  }
}
 else if (minute > 30) {
  if (period == "AM" && hour == 11) {
    console.log("It's almost noon.");
  }
  else if (period == "AM" && hour >= 3) {
    hour++
    console.log("It's almost " + hour + " in the morning.");
  }
  else if (period == "PM" && hour >= 1 && hour <= 4) {
    hour++
    console.log("It's almost " + hour + " in the afternoon.");
  }
  else if (period =="PM" && hour >= 5 && hour <=7) {
    hour++
    console.log("It's almost " + hour + " in the evening.");
  }
  else if (period == "PM" && hour >=8 || period == "AM" && hour < 3) {
    hour++
    console.log("It's almost " + hour + " at night.");
  }
}
