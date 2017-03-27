function sweatshirtPricing(num) {
  var pricePer = 20;
  var amount = num * pricePer;
  if (num >= 4) {
    amount -= amount * 0.35;
  }
  else if (num >= 3) {
    amount -= amount * 0.19;
  }
  else if (num >= 2) {
    amount -= amount * 0.09;
  }
  return "$" + Math.ceil(amount);
}

console.log(sweatshirtPricing(5));
