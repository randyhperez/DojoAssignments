var arr2 = [];

function values(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr.length < 2) {
      console.log("Nooooooo bruuuuuh!");
      break;
    }
    if (arr[i] > arr[1]) {
      arr2.push(i);
    }
  }
  return arr2.length;
}

console.log(values([1]));
