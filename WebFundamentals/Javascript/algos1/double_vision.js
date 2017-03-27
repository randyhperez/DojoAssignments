function double(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
  }
  return arr;
}

console.log(double([1,2,3]));
