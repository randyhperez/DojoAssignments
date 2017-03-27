function sigma(num) {
  var x = 0;
  for (var i = 1; i <= num; i++) {
    if (x >= 0) {
      x += i;
    }
  }
  return x;
}

console.log(sigma(5));
