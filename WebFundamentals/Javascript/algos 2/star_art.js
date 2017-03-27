function drawLeftStars(num) {
  num = Math.abs(num);
  var printStar = "*";
  var printSpace = " ";
  var leftStars = "";
  for (var i = 0; i < 75; i++) {
    if (i <= num) {
      leftStars += printStar;
    }
    else if (i > num) {
      leftStars += printSpace;
    }
  }
  console.log(leftStars);
}

function drawRightStars(num) {
  num = Math.abs(num);
  var printStar = "*";
  var printSpace = " ";
  var rightStars = "";
  for (var i = 0; i < 75; i++) {
    if (i < 75 - num) {
      rightStars += printSpace;
    }
    else if (i >= 75 - num) {
      rightStars += printStar;
    }
  }
  console.log(rightStars);
}


function drawCenterStars(num) {
  num = Math.abs(num);
  if (num > 75) {
    num = 75
  }
  var printStar = "*";
  var printSpace = " ";
  var centerStars = "";
  var beforeStars = (75 - num) / 2
  for (var i = 0; i < 75; i++) {
    if (i < beforeStars) {
      centerStars += printSpace;
    }
    else if (i >= beforeStars && i < beforeStars + num) {
      centerStars += printStar;
    }
    else {
      centerStars += printSpace;
    }
  }
  console.log(centerStars);
}

drawLeftStars(500)
drawRightStars(-100)
drawCenterStars(30)
