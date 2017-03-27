function letterGrade(score) {
  if (score <= 100 && score >= 92) {
    console.log("Score: " + score + ". Grade: A");
  }
  else if (score <= 91 && score >= 90) {
    console.log("Score: " + score + ". Grade: A-");
  }
  else if (score <= 89 && score >= 88) {
    console.log("Score: " + score + ". Grade: B+");
  }
  else if (score <= 87 && score >= 82) {
    console.log("Score: " + score + ". Grade: B");
  }
  else if (score <= 81 && score >= 80) {
    console.log("Score: " + score + ". Grade: B-");
  }
  else if (score <= 79 && score >= 78) {
    console.log("Score: " + score + ". Grade: C+");
  }
  else if (score <= 77 && score >= 72) {
    console.log("Score: " + score + ". Grade: C");
  }
  else if (score <= 71 && score >= 70) {
    console.log("Score: " + score + ". Grade: C-");
  }
  else if (score <= 69 && score >= 68) {
    console.log("Score: " + score + ". Grade: D+");
  }
  else if (score <= 67 && score >= 62) {
    console.log("Score: " + score + ". Grade: D");
  }
  else if (score <= 61 && score >= 60) {
    console.log("Score: " + score + ". Grade: D-");
  }
  else if (score <= 59 && score >= 0) {
    console.log("Score: " + score + ". Grade: F");
  }
  else {
    console.log("That's not a score on the grading scale!");
  }
}

letterGrade(81)
