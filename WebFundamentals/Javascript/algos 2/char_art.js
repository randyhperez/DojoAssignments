function drawLeftStars(num, char) {
  num = Math.abs(num);
  var printChar = char;
  var printSpace = " ";
  var leftStars = "";
  for (var i = 0; i < 75; i++) {
    if (i <= num) {
      leftStars += printChar;
    }
    else if (i > num) {
      leftStars += printSpace;
    }
  }
  console.log(leftStars);
}

function drawRightStars(num, char) {
  num = Math.abs(num);
  var printChar = char;
  var printSpace = " ";
  var rightStars = "";
  for (var i = 0; i < 75; i++) {
    if (i < 75 - num) {
      rightStars += printSpace;
    }
    else if (i >= 75 - num) {
      rightStars += printChar;
    }
  }
  console.log(rightStars);
}


function drawCenterStars(num, char) {
  num = Math.abs(num);
  if (num > 75) {
    num = 75
  }
  var printChar = char;
  var printSpace = " ";
  var centerStars = "";
  var beforeStars = (75 - num) / 2
  for (var i = 0; i < 75; i++) {
    if (i < beforeStars) {
      centerStars += printSpace;
    }
    else if (i >= beforeStars && i < beforeStars + num) {
      centerStars += printChar;
    }
    else {
      centerStars += printSpace;
    }
  }
  console.log(centerStars);
}

drawLeftStars(10, "x")
drawRightStars(10, "o")
drawCenterStars(30, "|")
