function finalCountdown(param1, param2, param3, param4) {
  for (var i = param2; i < param3; i++) {
    if (i == param4) {
      continue;
    }
    else if (i % param1 == 0) {
      console.log(i);
    }
  }
}

finalCountdown(3,5,17,9);
