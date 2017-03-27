function leapYear(year) {
  if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    console.log("It's leap year!");
  }
  else {
    console.log("It's not leap year braah.");
  }
}

leapYear();
