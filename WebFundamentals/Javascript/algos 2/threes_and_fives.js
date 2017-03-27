function threesFives(start, end) {
  var finalSum = start;
  for (var i = start + 1; i <= end; i++) {
    var i = i;
    if ((finalSum + i) % 3 == 0 && (finalSum + i) % 5 != 0 || (finalSum + i) % 3 != 0 && (finalSum + i) % 5 == 0) {
      finalSum += i;
    }
  }
  console.log(finalSum);
}

threesFives(1, 10);
