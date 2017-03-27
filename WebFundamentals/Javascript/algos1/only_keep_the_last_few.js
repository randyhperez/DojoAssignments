function lastFew(arr, x) {
  var arr2d2 = [];
  for (var i = 0; i < arr.length; i++) {
    if (i > x - 2) {
      arr2d2.push(arr[i]);
    }
  }
  arr = arr2d2;
  return arr;
}

lastFew([2,4,6,8,10], 3)
