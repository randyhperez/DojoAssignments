function flexibleCountdown(lowNum,highNum, mult) {
  for (var i = highNum; i > lowNum; i--)  {
    if (i % mult == 0) {
      console.log(i);
    }
  }
}

flexibleCountdown(2,9,3);
