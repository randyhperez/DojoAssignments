for (var daysuntilMyBirthday = 60; daysuntilMyBirthday > 0; daysuntilMyBirthday--) {
  if (daysuntilMyBirthday > 30) {
    console.log("I'm not that old yet! There's still " + daysuntilMyBirthday + " until my birthyday! YAAAAS!");
  }
  if (daysuntilMyBirthday <= 30 && daysuntilMyBirthday > 5) {
    console.log("oh no I'm only " + daysuntilMyBirthday + " away from my birthday. I am already feeling old :'(.");
  }
  if (daysuntilMyBirthday <= 5) {
    console.log(daysuntilMyBirthday + " until my birthday. FML my back hurts already.");
  }
}
