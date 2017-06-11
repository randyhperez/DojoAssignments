/*
Basic: Make a function that can be used anywhere in your file and that when
invoked will console.log('I am running!'); Give it the name runningLogger.
*/

function runningLogger() {
  console.log('I am runng!');
};

/*
Basic: Make a function that is callable, has one parameter
and multiplies the value of the parameter by 10 before returning
the result. Give it the name multiplyByTen. Invoke it, passing it
the argument 5.
*/

function multiplyByTen(num) {
  if (!(typeof(num) == 'number')) {
    console.log('Please enter a number');
    return
  }
  return num * 10
}

console.log(multiplyByTen(5));

/*
Basic: Write two functions (stringReturnOne and stringReturnTwo) that
each return a different hard-coded string
*/

function stringReturnOne() {
  return 'This is string one'
}

function stringReturnTwo() {
  return 'This is string two'
}

/*
Medium: Write a function named caller that has one parameter.
If the argument provided to caller is a function (typeof may be useful),
 invoke the argument. Nothing is returned.
*/

function caller(func) {
  if (typeof(func) == 'function') {
    func()
  }
}

/*
Medium: Write a function named myDoubleConsoleLog that has two parameters.
if the arguments passed to the function are functions, console.log the value that
each function returns when invoked.
*/

function myDoubleConsoleLog(func1, func2) {
  if (typeof(func1) == 'function') {
    console.log(func1());
  }
  if (typeof(func2)  == 'function') {
    console.log(func2());
  }
}

/*
Hard: Write a function named caller2 that has one parameter.
Have it console.log the string 'starting', wait 2 seconds, and then invokes the argument
if the argument is a function. (setTimeout may be useful for this one.)
The function should then console.log ‘ending?’ and return “interesting”. Invoke this
function by passing it myDoubleConsoleLog.
*/

function caller2(func) {
  console.log('Starting...');
  var x = setTimeout(function() {
    if (typeof(func) == 'function') {
      func(stringReturnOne, stringReturnTwo);
    };
  }, 2000)
  console.log('Ending...');
  return "interesting";
};

caller2(myDoubleConsoleLog)
