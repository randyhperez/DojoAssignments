# In this string: str = "It's thanksgiving day. It's my birthday,too!" print the position of the first instance of the word "day". Then create a new string where the word "day" is replaced with the word "month".
str = "It's thanksgiving day. It's my birthday,too!"
day = "day"
if day in str:
    print str.index(day)
    str = str.replace("day", "month")
    print str

# Print the min and max values in a list like this one: x = [2,54,-2,7,12,98]. Your code should work for any list.
arr = [2,54,2,7,12,98]
print "Min is", min(arr)
print "Max is", max(arr)

# Print the first and last values in a list like this one: x = ["hello",2,54,-2,7,12,98,"world"]. Now create a new list containing only the first and last values in the original list. Your code should work for any list.
x = ["hello",2,54,-2,7,12,98,"world"]
print x[0]
print x[len(x) - 1]

# Start with a list like this one: x = [19,2,54,-2,7,12,98,32,10,-3,6]. Sort your list first. Then, split your list in half. Push the list created from the first half to position 0 of the list created from the second half. The output should be: [[-3, -2, 2, 6, 7], 10, 12, 19, 32, 54, 98]. Stick with it, this one is tough!
arr2d2 = [19,2,54,-2,7,12,98,32,10,-3,6]
arr2d2.sort()
list1 = arr2d2[0:len(arr2d2)/2]
list2 = arr2d2[len(arr2d2)/2:len(arr2d2)]
print list1
print list2
print arr2d2
list2.insert(0,list1)
print list2
