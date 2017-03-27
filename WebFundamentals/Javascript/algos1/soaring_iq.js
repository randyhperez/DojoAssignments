var bogdanIQ = 101;
var x = 0;
var iq = 0;

for (var i = 1; i <= 98; i++) {
  x += 0.01;
  iq += x;
}

bogdanIQ += iq;
console.log(bogdanIQ);
