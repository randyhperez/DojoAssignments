function lowHigh(arr) {
  var minValue = arr[0];
  var maxValue = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (minValue > arr[i]) {
      minValue = arr[i];
    }
    if (maxValue < arr[i]) {
      maxValue = arr[i];
    }
  }
  console.log("The lowest value in the arry is " + minValue + ".");
  console.log("The highest value in the array is " + maxValue + ".");
}

lowHigh([1,3,8,0,5]);
