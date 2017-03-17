var arr = [1, "apple", -3, "orange", 0.5]

function numbersOnly() {
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] != 'number') {
      arr.splice(i, 1)
    }
  }
  console.log(arr);
}

numbersOnly(arr)
