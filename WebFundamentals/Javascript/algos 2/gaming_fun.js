// create function to generate integer 1-6
function rollOne() {
  var rollNum = Math.ceil(Math.random() * 6);
  return rollNum;
}

//create funtion that takes a parameter and calls rollOne that many times. if return is 5 'thats GL!'
function playFives(num) {
  for (var i = 0; i < num; i++) {
    var rollNum = rollOne();
    if (rollNum === 5) {
      console.log(rollNum + " That's good luck!");
    }
    else {
      console.log(rollNum);
    }
  }
}

//create function that calls rollOne() 8x and prints ONLY highest and lowest values
function playStatistics() {
  var highest;
  var lowest;
  for (var i = 0; i < 8; i++) {
    var rollNum = rollOne();
    if (highest === undefined || rollNum > highest) {
      highest = rollNum;
    }
    if (lowest === undefined || rollNum < lowest) {
      lowest = rollNum;
    }
  }
  console.log('Highest value: ' + highest);
  console.log('Lowest value: ' + lowest);
}

// create function that copies playStatistics() and ALSO logs sum of all 8 rolls
function playStatistics2() {
  var highest;
  var lowest;
  var sum = 0;
  for (var i = 0; i < 8; i++) {
    var rollNum = rollOne();
    sum += rollNum;
    if (highest === undefined || rollNum > highest) {
      highest = rollNum;
    }
    if (lowest === undefined || rollNum < lowest) {
      lowest = rollNum;
    }
  }
  console.log('Highest value: ' + highest);
  console.log('Lowest value: ' + lowest);
  console.log('Sum: ' + sum);
}


// creat function that's copy of playStatistics2 but takes a parameter and rolls that many times
function playStatistics3(num) {
  var highest;
  var lowest;
  var sum = 0;
  while (num > 0) {
    var rollNum = rollOne();
    sum += rollNum;
    if (highest === undefined || rollNum > highest) {
      highest = rollNum;
    }
    if (lowest === undefined || rollNum < lowest) {
      lowest = rollNum;
    }
    num--;
  }
  console.log('Highest value: ' + highest);
  console.log('Lowest value: ' + lowest);
  console.log('Sum: ' + sum);
}


// create function that's copy of playStatistics3() but prints avg roll instead of sum
function playStatistics4(num) {
  var highest;
  var lowest;
  var temp = num;
  var avg = 0;
  while (num > 0) {
    var rollNum = rollOne();
    avg += rollNum;
    if (highest === undefined || rollNum > highest) {
      highest = rollNum;
    }
    if (lowest === undefined || rollNum < lowest) {
      lowest = rollNum;
    }
    num--;
  }
  avg /= temp;
  console.log('Highest value: ' + highest);
  console.log('Lowest value: ' + lowest);
  console.log('Average: ' + avg);
}

playStatistics4(2);
