function sigDig(num) {
  if (num < 0) {
    num *= -1;
  }
  if (num < 1) {
    while (num < 1) {
      num *= 10;
    }
  }
  else {
    while (num > 9) {
      num /= 10;
    }
  }
  num = Math.floor(num);
  console.log(num);
}

sigDig(-0.00987);
