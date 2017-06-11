var x =  [3,5,"Dojo", "rocks", "Michael", "Sensei"];

for (var index = 0; index < x.length; index++) {
  console.log(x[index])
};

x.push(100);

x =  ["hello", "world", "JavaScript is Fun"];

console.log(x);

var sum = 0;

for (var num = 1; num <= 500; num++) {
  sum += num;
};

console.log('Sum: ' + sum)

var arr =  [1, 5, 90, 25, -3, 0]

for (var idx = 0; idx < arr.length; idx++) {
  if (!min) {
    var min = arr[idx];
  };
  if (arr[idx] < min) {
    min = arr[idx];
  };
}

console.log(min)

for (var idx = 0; idx < arr.length; idx++) {
  if(!avg) {
    var avg = 0;
  };
  avg += arr[idx];
};

avg /= arr.length;

console.log(avg)

var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript',
 dojo: 'Dallas'
}

for (var key in newNinja) {
  console.log(key + ': ' + newNinja[key]);
}
