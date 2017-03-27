var myNumber = 42
var myName = "Randy"

temp = myNumber
myNumber = myName
myName = temp

console.log("My number is now my name: " + myNumber);
console.log("My name is now my number: " + myName);
