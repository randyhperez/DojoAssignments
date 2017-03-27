function negativeOutlook(arr) {
  var arr2d2 = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr2d2.push(arr[i] * -1);
    }
    else {
      arr2d2.push(arr[i]);
    }
  }
  return arr2d2;
}

negativeOutlook([-1,4,-5,-2,8]);
