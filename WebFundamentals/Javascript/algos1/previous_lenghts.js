function  previousLengths(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    if (i > 0) {
      arr[i] = arr[i - 1].length;
    }
  }
  console.log(arr);
}

previousLengths(["hola","hello","hi"]);
