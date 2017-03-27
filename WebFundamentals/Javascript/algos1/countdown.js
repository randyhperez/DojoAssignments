var arr = [];

function countdown(input) {
  for (var i = input; i >=0 ; i--) {
    arr.push(i);
  }
  console.log(arr);
  console.log("The array is " + arr.length + " indices long.");
}

countdown(10);
