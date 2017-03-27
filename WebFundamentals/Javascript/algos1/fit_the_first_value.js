function firstValue(arr) {
  if (arr[0] > arr.length) {
    console.log("Too Big!");
  }
  else if (arr[0] < arr.length) {
    console.log("Too small!");
  }
  else {
    console.log("Just right!");
  }
}

firstValue([]);
