// create 4 functions to move claire, log her x direction, log her y direction and reset her x/y.
var x = 0;
var y = 0;

function reset() {
  x = 0;
  y = 0;
}

function moveBy(xOffSet, yOffSet) {
  x += xOffSet;
  y += yOffSet;
}

function xLocation() {
  console.log(x);
}

function yLocation() {
  console.log(y);
}

moveBy(11,8);
moveBy(12,-5)
reset();
xLocation();
yLocation();
