function generateCoinChange(cents) {
  var quarters = 0;
  var dimes = 0;
  var nickels = 0;
  var pennies = 0;
  while (cents > 0) {
    if (cents >= 25) {
      cents -= 25;
      quarters++;
    }
    else if (cents >= 10) {
      cents -= 10;
      dimes++;
    }
    else if (cents >= 5) {
      cents -= 5;
      nickels++;
    }
    else if (cents >= 1) {
      cents--;
      pennies++;
    }
  }
  if (quarters > 0) {
    console.log("Quarters: " + quarters);
  }
  if (dimes > 0) {
    console.log("Dimes: " + dimes);
  }
  if (nickels > 0) {
    console.log("Nickels: " + nickels);
  }
  if (pennies > 0) {
    console.log("Pennies: " + pennies);
  }
}

generateCoinChange()

function shortened(cents) {
  var coins = ['quarters','dimes','nickels','pennies'];
  var coinObj = {
    'quarters': 25,
    'dimes': 10,
    'nickels': 5,
    'pennies': 1
  }
  function change(coin) {
    var coinVal = coinObj[coin];
    var count = Math.floor(cents/coinVal);
    cents = cents % coinVal;
    console.log(coin + ": " + count);
  }
  for (var i = 0; i < coins.length; i++){
    change(coins[i])
  }
}

shortened(50)
