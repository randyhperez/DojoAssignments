# Write a function that takes in a dictionary and returns a list of tuples where the first tuple item is the key and the second is the value.

my_dict = {
  "Speros": "(555) 555-5555",
  "Michael": "(999) 999-9999",
  "Jay": "(777) 777-7777"
}

def tuplesOut(aDict):
    newList = []
    for key,data in aDict.iteritems():
        newList.append((key, data))
    print newList

tuplesOut(my_dict)
