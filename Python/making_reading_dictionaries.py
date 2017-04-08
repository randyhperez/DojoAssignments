# Create a dictionary containing some information about yourself. The keys should include name, age, country of birth, favorite language.

me = {"name": "Randy", "age": "28", "country of birth": "United States", "favorite language": "not Python"}
print me.keys()
def dictBasics(aDict):
    for key,data in aDict.iteritems():
        print "My", key, "is", data

dictBasics(me)
