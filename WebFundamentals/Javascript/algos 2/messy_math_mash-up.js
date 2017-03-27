function messyMath(num) {
  var sum = 0;
  for (var count = 0; count <= num; count++) {
    if (num / 3 == count) {
      return sum = -1;
    }
    else if (count % 3 == 0) {
      continue;
    }
    else if (count % 7 == 0) {
      sum += count + count;
    }
    else {
      sum += count;
    }
  }
  return sum;
}

console.log(messyMath(8));
