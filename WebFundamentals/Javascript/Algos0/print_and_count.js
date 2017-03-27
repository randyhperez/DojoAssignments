var x = 0;

for (var i = 512; i < 4097; i++) {
  if (i % 5 == 0) {
    console.log(i);
    x++;
  }
}

console.log("There were " + x + " multiples of 5!");
