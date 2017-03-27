function extractDigit(num, digitnum) {
  if (num < 0) {
    num *= -1;
    num = extractor(num, digitnum);
    num *= -1;
  }
  else if (num > 0){
    num = extractor(num, digitnum);
  }
  function extractor(num, digitnum) {
    if (digitnum >= 0) {
      for (var i = 0; i < digitnum; i++) {
        num /= 10;
      }
    }
    else if (digitnum < 0) {;
      for (var i = digitnum; i < 0; i++) {
        num *= 10;
      }
    }
    num = Math.floor(num) % 10;
    return num;
  }
  console.log(num);
}

extractDigit(-123.45,-2);
