var x = 0

for (var i = -300000; i <= 300000; i++) {
  if (i % 2 != 0) {
    x += i
  }
  if (i == 300000) {
    console.log(x);
  }
}
