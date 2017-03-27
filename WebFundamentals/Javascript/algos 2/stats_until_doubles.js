// creat function that imitates a 20 sided doll. Roll til same # twice in a row. log rolls, min, max and avg.
function statsDoubles() {
  var highest = 0;
  var lowest;
  var doublesCheck = [];
  var count = 0
  var avg = 0;
    for (var i = 0; i >= 0; i++) {
      count++;
      var rollNum = Math.ceil(Math.random() * 20);
      console.log('You rolled a ' + rollNum);
      avg += rollNum;
      doublesCheck.push(rollNum);
      if (rollNum > highest) {
        highest = rollNum;
      }
      if (lowest === undefined || rollNum < lowest) {
        lowest = rollNum;
      }
      if (doublesCheck[i] === doublesCheck[i - 1]) {
        avg /= count;
        console.log('Rolls: ' + count);
        console.log('Min: ' + lowest);
        console.log('Max: ' + highest);
        console.log('Average: ' + Math.round(avg));
        break;
      }
    }

}

statsDoubles();
