import random

def scoresGrades(amt):
    print "Scores and Grades"
    for num in range(amt):
        score = random.randint(60, 100)
        if score >= 90:
            grade = "A"
        elif score >= 80:
            grade = "B"
        elif score >= 70:
            grade = "C"
        elif score >= 60:
            grade = "D"
        print "Score:", str(score) + ";", "Your grade is", grade
    print "End of the program. Bye!"

scoresGrades(10)
