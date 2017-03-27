var x = 0;

function countPositives(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      x += arr[i];
    }
  }
  arr[arr.length - 1] = x;
  console.log(arr);
}

countPositives([-1, 1, 1, 1]);
