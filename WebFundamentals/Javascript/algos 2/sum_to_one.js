function sumToOne(num) {
  do {
    var sum = 0;
    while (num > 9) {
      var dig = num % 10;
      num = Math.floor(num / 10);
      sum += dig;
    }
    sum += num;
    num = sum;
  } while (sum > 9);
  return sum;
}

console.log(sumToOne(5));
