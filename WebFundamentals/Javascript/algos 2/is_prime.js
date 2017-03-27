function isPrime(num) {
  var dig = 0;
  for (var i = 1; i <= num; i++) {
      if (num % i == 0) {
        dig++;
      }
  }
  if (dig > 2) {
    return "Not prime";
  }
  else {
    return "It's prime";
  }
}

console.log(isPrime(8));
