function alwaysHungry(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "food") {
      console.log("yummy");
      var imHungry = "food";
    }
  }
  if (imHungry != "food") {
    console.log("I'm hungry");
  }
}

alwaysHungry([1,2,"food"]);
