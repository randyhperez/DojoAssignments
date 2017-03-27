function weekDayName(weekDayNum) {
  var day;
  switch (weekDayNum) {
    case 1:
      day = 'Sunday';
      break;
    case 2:
      day = 'Monday';
      break;
    case 3:
      day = 'Tuesday';
      break;
    case 4:
      day = 'Wednesday';
      break;
    case 5:
      day = 'Thursday';
      break;
    case 6:
      day = 'Friday';
      break;
    case 7:
      day = 'Saturday';
      break;
  }
  return  day;
}

function weekDayName2(weekDayNum) {
  var day;
  weekDayNum %= 7;
  switch (weekDayNum) {
    case 1:
      day = 'Sunday';
      break;
    case 2:
      day = 'Monday';
      break;
    case 3:
      day = 'Tuesday';
      break;
    case 4:
      day = 'Wednesday';
      break;
    case 5:
      day = 'Thursday';
      break;
    case 6:
      day = 'Friday';
      break;
    case 0:
      day = 'Saturday';
      break;
  }
  return  day;
}

function someDays() {
  for (var i = 0; i < 17; i++) {
    var today = weekDayName2(Math.floor(Math.random() * 365) + 1);
    if (today == 'Saturday' || today == 'Sunday') {
      console.log('Enjoy your day off');
    }
    else {
      console.log('WOrk Hard');
    }
  }
}

function monthName(monthNum) {
  var calendar = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  return calendar[monthNum - 1];
}

function monthtoDays(monthNum) {
  var calendar = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var days;
    switch (calendar[monthNum - 1]) {
      case "January":
        days = 31;
        break;
      case 'February':
        days = 28;
        break;
      case 'March':
        days = 31;
        break;
      case 'April':
        days = 30;
        break;
      case 'May':
        days = 31;
        break;
      case 'June':
        days = 30;
        break;
      case 'July':
        days = 31;
        break;
      case 'August':
        days = 31;
        break;
      case 'September':
        days = 30;
        break;
      case 'October':
        days = 31;
        break;
      case 'November':
        days = 30;
        break;
      case 'December':
        days = 31;
        break;
    }
    return days;
}

function daysToMonth(dayNum) {
  var monthNum = 1;
  while (dayNum > 0) {
    dayNum = dayNum - monthtoDays(monthNum);
    monthNum = monthNum  + 1 >12 ? monthNum + 1 - 12 : monthNum + 1;
  }
  return monthName(monthNum - 1);
}

function fullDate(dayNum) {
  var weekday = weekDayName2(dayNum);
  var month = daysToMonth(dayNum);
  var year = 2017 + Math.floor(dayNum/365);
  var monthNum = 1;
  while (dayNum > 0) {
    dayNum = dayNum - monthtoDays(monthNum);
    monthNum = monthNum  + 1 > 12 ? monthNum + 1 - 12 : monthNum + 1;
  }
  var day = dayNum + monthtoDays(monthNum-1)
  return weekday + ', ' + month + ' ' + day + ', ' + year;
}

function fullDate2(dayNum) {
  var weekday = weekDayName2(dayNum);
  var leapYear = Math.floor((dayNum / 365) / 4);
  dayNum -= leapYear;
  var month = daysToMonth(dayNum);
  var year = 2017 + Math.floor(dayNum / 365);
  var monthNum = 1;
  while (dayNum > 0) {
    dayNum = dayNum - monthtoDays(monthNum);
    monthNum = monthNum  + 1 > 12 ? monthNum + 1 - 12 : monthNum + 1;
  }
  var day = dayNum + monthtoDays(monthNum-1);
  return weekday + ', ' + month + ' ' + day + ', ' + year;
}

function fullDate3(dayNum) {
  var weekday = weekDayName2(dayNum);
  var month = daysToMonth(dayNum);
  var year = 2017
  var yearCalc = Math.floor(dayNum/365)
  var leapYear;

  for (var i = 0; i < yearCalc; i++) {
    year++
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
      leapYear++
      dayNum--;
    }
  }
  var monthNum = 1;
  while (dayNum > 0) {
    dayNum = dayNum - monthtoDays(monthNum);
    monthNum = monthNum  + 1 > 12 ? monthNum + 1 - 12 : monthNum + 1;
  }
  var day = dayNum + monthtoDays(monthNum-1);
  return weekday + ', ' + month + ' ' + day + ', ' + year;
}

console.log(fullDate3(139947));
