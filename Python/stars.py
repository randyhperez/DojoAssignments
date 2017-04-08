# Create a function called draw_stars() that takes a list of numbers and prints out *.
def draw_Stars(aList):
    for val in aList:
        print "*" * val

# draw_Stars([4,6,1,3,5,7,25])

# Modify the function above. Allow a list containing integers and strings to be passed to the draw_stars() function.
# When a string is passed, instead of displaying *, display the first letter of the string according to the example below.
# You may use the .lower() string method for this part.

def draw_StarsTwo(aList):
    for val in aList:
        if type(val) == int:
            print "*" * val
        elif type(val) == str:
            print val[0].lower() * len(val)


draw_StarsTwo([4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"])
