import re
pwregex = re.compile(r'^[a-zA-Z0-9]*$')
words = "pasSword1"

print pwregex.match(words)

for letter in words:
    if pwregex.match(letter):
        print "hello"
    else:
        print "no"
