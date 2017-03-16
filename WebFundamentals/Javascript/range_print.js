function printRange (start, end, skip){
  if (start > end) {
    console.log("Can't count like that homie :/");
  }
  if (skip < 0) {
    skip = skip * -1
  }
  if (typeof end != 'number' && typeof skip != 'number') {
    for (var i = 0; i < start; i++) {
      console.log(i);
    }
  }
  else if (typeof skip != 'number'){
    for (var i = start; i < end; i++)
    console.log(i);
  }
  else {
    for (var i = start; i < end; i = i + skip)
    console.log(i);
  }
}

printRange(10, 8, -2);
