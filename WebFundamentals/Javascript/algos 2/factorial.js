function factorial(num) {
  var x = 1;
  if (num < 0) {
    return "doesn't work"
  }
  for (var i = 1; i <= num; i++) {
    if (x >= 0) {
      x *= i;
    }
  }
  return x;
}

console.log(factorial(5));
