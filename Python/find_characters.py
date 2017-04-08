l = ['hello','world','my','name','is','Anna']
character = "o"

def findChar(arr, char):
    arr2d2 = []
    for element in arr:
        if type(element) == str:
            for letter in element:
                if letter == char:
                    arr2d2.append(element)
        else:
            continue
    print arr2d2

findChar(l, character)
