def oddEven():
    for num in range(1, 2001):
        if num % 2 == 0:
            print "Number is", str(num) + ".", "This is an even number"
        else:
            print "Number is", str(num) + ".", "This is an odd number"
# oddEven()

def multiply(aList, aNum):
    for idx in range(len(aList)):
        aList[idx] *= aNum
    return aList

def layered_multiples(arr):
    arr3p0 = []
    for val in arr:
        arr2d2 =[]
        for num in range(val):
            arr2d2.append(1)
        arr3p0.append(arr2d2)
    return arr3p0

print layered_multiples(multiply([2,4,5],3))
