/*
Create a simple for loop that sums all the integers between
x and y (inclusive). Have it console log the final sum.
*/

function sum(x, y) {
  var sum = 0;
  for (var i = x; i <= y; i++){
    sum += i;
  };
  console.log(sum);
}

sum(1,3);

/*
Write a loop that will go through an array, find the minimum value,
and then return it
*/

function arrMin(arr) {
 for (var idx = 0; idx < arr.length; idx++) {
   if (!min) {
     var min = arr[idx];
   };
   if (arr[idx] < min) {
     min = arr[idx];
   };
 };
 return min;
};

console.log(arrMin([1,2,3,4,5]));

/*
Write a loop that will go through an array, find the average of all of the
values, and then return it
*/

function arrAvg(arr) {
  var avg = 0;
  for (var idx = 0; idx < arr.length; idx++) {
    avg += arr[idx];
  };
  return avg;
};

console.log(arrAvg([1,2,3,4,5]));

// Rewrite these 3 as anonymous functions assigned to variables.

var func1 = function (x, y) {
  var sum = 0;
  for (var i = x; i <= y; i++){
    sum += i;
  };
  console.log(sum);
}

var func2 = function (arr) {
 for (var idx = 0; idx < arr.length; idx++) {
   if (!min) {
     var min = arr[idx];
   };
   if (arr[idx] < min) {
     min = arr[idx];
   };
 };
 return min;
};

var func3 = function (arr) {
  var avg = 0;
  for (var idx = 0; idx < arr.length; idx++) {
    avg += arr[idx];
  };
  return avg;
};

// Rewrite these as methods of an object

var funcObj = {
  sum: function (x, y) {
    var sum = 0;
    for (var i = x; i <= y; i++){
      sum += i;
    };
    console.log(sum);
  },
  min: function (arr) {
   for (var idx = 0; idx < arr.length; idx++) {
     if (!min) {
       var min = arr[idx];
     };
     if (arr[idx] < min) {
       min = arr[idx];
     };
   };
   return min;
 },
 avg: function (arr) {
   var avg = 0;
   for (var idx = 0; idx < arr.length; idx++) {
     avg += arr[idx];
   };
   return avg;
 }
}

// Create a JavaScript object called person with the following properties/methods

var person = {
  name: 'Randy',
  distance_traveled: 0,
  say_name: function (){
    console.log(this.name);
  },
  say_something: function (str) {
    console.log(`${this.name} says ${str}`);
  },
  walk: function () {
    console.log(`${this.name} is walking!`);
    this.distance_traveled += 3;
    return this;
  },
  run: function () {
    console.log(this.name + ' is running!');
    this.distance_traveled += 10;
    return this;
  },
  crawl: function () {
    console.log(this.name + " is crawling!");
    this.distance_traveled += 1;
    return this;
  }
}

console.log(person.crawl().crawl());
