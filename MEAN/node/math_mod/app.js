const mathlib = require('./mathlib.js')();

const test1 = 10;
const test2 = 20;

console.log(mathlib.add(test1, test2));
console.log(mathlib.multiply(test1, test2));
console.log(mathlib.square(test1));
console.log(mathlib.square(test2));
console.log(mathlib.random(test1, test2));
