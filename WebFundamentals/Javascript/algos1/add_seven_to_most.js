function addSeven(arr) {
  var arr2d2 = [];
  for (var i = 0; i < arr.length; i++) {
    if (i == 0) {
      arr2d2.push(arr[i]);
    }
    else {
      arr2d2.push(arr[i] + 7);
    }
  }
  return arr2d2;
}

addSeven([1,2,3,4,5,6]);
