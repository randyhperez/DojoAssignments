function swapTowardCenter(arr) {
  var temp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp
  console.log(arr);
}

swapTowardCenter([1,2,3,4,5,6]);
