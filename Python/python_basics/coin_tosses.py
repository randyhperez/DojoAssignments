# Write a function that simulates tossing a coin 5,000 times. Your function should print how many times the head/tail appears.
import random

def coinToss():
    counter = 0
    hCounter = 0
    tCounter = 0
    print "Starting the program..."
    for num in range(5000):
        counter += 1
        val = round(random.random())
        if val == 0:
            coinSide = "head"
            hCounter += 1
        else:
            coinSide = "tail"
            tCounter += 1
        print "Attempt #" + str(counter) +": Throwing a coin... It's a", coinSide + "! ... Got", hCounter, "head(s) so far and", tCounter, "tail(s) so far"

coinToss()
