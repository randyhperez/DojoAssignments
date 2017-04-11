# Create program that prints multiplication table in your console.

def multiplicationTable():
    print "x 1 2 3 4 5 6 7 8 9 10 11 12"
    arr = [1,2,3,4,5,6,7,8,9,10,11,12]
    for val in arr:
        aString = str(val) + " " + str(val)
        for num in range(1,13):
            x = val * num
            aString += " " + str(x)
        print aString
multiplicationTable()
