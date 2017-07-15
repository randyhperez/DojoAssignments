function fib() {
  var fib1 = 0;
  var fib2 = 1;
  var temp;
  function nacci() {
    console.log(fib2)
    temp = fib1;
    fib1 = fib2;
    fib2 += temp;
  }
  return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
