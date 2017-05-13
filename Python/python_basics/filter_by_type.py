# If the integer is greater than or equal to 100 print "That's a big number!" If the integer is less than 100 print "That's a small number"
num = 70
if num >= 100:
    print "That's a big number"
elif num < 100:
    print "That's a small number"

# If the string is greater than or equal to 50 characters print "Long sentence." If the string is shorter than 50 characters print "Short sentence."
str = "Keep it 100"
if len(str) >= 50:
    print "Long sentence"
elif len(str) < 50:
    print "Short sentence"

mylist = ['name','address','phone number','social security number']
if len(mylist) >= 10:
    print "Big list"
elif len(mylist) < 10:
    print "Short list" 
