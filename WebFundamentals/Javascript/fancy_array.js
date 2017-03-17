var arr = ["James", "Jill", "Jane", "Jack"]

function fancyArray(symbol, boolean) {
  if (boolean == true) {
    for (var i = arr.length-1; i >=0; i--) {
      console.log(i + " " + symbol + " " + arr[i]);
    }
  }
  else {
    for (var i = 0; i < arr.length; i++) {
      console.log(i + " " + symbol + " " + arr[i]);
    }
  }
}
// can pass symbol "->", "=>", "::", "-----", etc.. and boolean true/false
fancyArray("->", false)
