// For each of the following problems rewrite the code to mimic how the interpreter would rearrange it before running.

// 1
console.log(first_variable);
var first_variable = "Yipee I was first!";
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}
console.log(first_variable);
// rearrange
var first_variable;
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
};
first_variable = "Yippee I was first!";
console.log(first_variable);

// 2
var food = "Chicken";
function eat() {
  food = "half-chicken";
  console.log(food);
  food = "gone";
  console.log(food);
}
eat();
console.log(food);
// rearrange
var food;
function eat() {
  var food;
  food = "half-chicken";
  console.log(food);
  var food = "gone";
  console.log(food);
};
food = "Chicken";
eat();
console.log(food);

// 3
var new_word = "NEW!";
function lastFunc() {
  new_word = "old";
}
console.log(new_word);
// rearrange
var new_word;
function lastFunc() {
  new_word = "old";
};
new_word = "NEW!";
console.log(new_word);
