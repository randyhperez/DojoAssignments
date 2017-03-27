function reverseArray(arr) {
  var arr2d2 = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    arr2d2.push(arr[i])
  }
  arr = arr2d2;
  console.log(arr);
}

reverseArray([1,2,3,4,5]);
