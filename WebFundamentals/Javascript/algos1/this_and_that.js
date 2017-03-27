function thisThat(num1,num2) {
  var arr = [];
  if (num1 == num2) {
    console.log("Jinx");
  }
  else {
    for (var i = 0; i < num1; i++) {
      arr.push(num2);
    }
  }
  console.log(arr);
}

thisThat(4,8);
