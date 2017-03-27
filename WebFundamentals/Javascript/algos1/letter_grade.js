function letterGrade(score) {
  if (score <= 100 && score >= 90) {
    console.log("Score: " + score + ". Grade: A." );
  }
  else if (score <= 89 && score >= 80) {
    console.log("Score: " + score + ". Grade: B.");
  }
  else if (score <= 79 && score >= 70) {
    console.log("Score: " + score + ". Grade: C.");
  }
  else if (score <= 69 && score >= 60) {
    console.log("Score: " + score + ". Grade: D.");
  }
  else if (score <= 59 && score >= 0) {
    console.log("Score: " + score + ". Grade: F.");
  }
  else {
    console.log("That's not a score on the grading scale!");
  }
}

letterGrade(85)
