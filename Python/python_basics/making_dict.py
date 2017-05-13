# Create a function that takes in two lists and creates a single dictionary where the first list contains keys and the second values. Assume the lists will be of equal length.

name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"]
favorite_animal = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas"]

print len(name)
print len(favorite_animal)

def make_dict(arr, arr2d2):
    new_dict = {}
    if len(arr2d2) > len(arr):
        datZip = zip(arr2d2, arr)
        new_dict = dict(datZip)
    else:
        datZip = zip(arr, arr2d2)
        new_dict = dict(datZip)
    return new_dict

print make_dict(name, favorite_animal)
