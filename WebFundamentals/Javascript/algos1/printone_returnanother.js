function oneAnother(arr) {
  console.log(arr[arr.length - 2]);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      return arr[i];
    }
  }
}

oneAnother([1,2,3,4]);
