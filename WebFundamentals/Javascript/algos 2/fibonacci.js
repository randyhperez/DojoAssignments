function fibonacci(num) {
  var arr2d2 = [];
  for (var i = 0; i <= num; i++) {
    if (arr2d2.length == 0) {
      arr2d2.push(i);
    }
    else if (arr2d2.length == 1) {
      arr2d2.push(i);
    }
    else {
      arr2d2[i] = arr2d2[i - 2] + arr2d2[i - 1];
    }
  }
  console.log(arr2d2[arr2d2.length - 1]);
}

fibonacci(7);
