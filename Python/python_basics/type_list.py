l = [1,2,3]

def typeList(datList):
    listType = ""
    datSum = 0
    datStr = "String: "
    for num in range(0, len(datList) - 1):
        if type(datList[num]) != type(datList[num + 1]):
            listType = "mixed"
        elif type(datList[num]) == int:
            listType = "integer"
        elif type(datList[num]) == str:
            listType = "string"
    for item in datList:
        if type(item) == int:
            datSum += item
        if type(item) == str:
            datStr += " " + item
    print "The array you entered is of", listType, "type."
    if listType == "mixed":
        print datStr
        print "Sum:", datSum
    elif listType == "string":
        print datStr
    else:
        print "Sum:",datSum


typeList(l)
