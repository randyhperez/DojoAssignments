var cDegrees = 0;

function fahrenheitToCelsius(fDegrees) {
  cDegrees = (fDegrees - 32) / 1.8;
  return cDegrees;
}

console.log(fahrenheitToCelsius());
