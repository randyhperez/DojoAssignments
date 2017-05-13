# Write a program that prints all the prime numbers and all the perfect squares for all numbers between 100 and 100000.
# For all numbers between 100 and 100000 test that number for whether it is prime or a perfect square. If it is a prime number print "Foo".
# If it is a perfect square print "Bar". If it is neither print "FooBar". Do not use the python math library for this exercise. For example,
# if the number you are evaluating is 25, you will have to figure out if it is a perfect square. It is, so print "Bar".

def fooBar():
    squareCheck = 10
    for num in range(100, 100001):
        primeCheck = 0
        for number in range(1, num + 1):
            if num % number == 0:
                primeCheck += 1
                if primeCheck > 2:
                    break
        if num == squareCheck * squareCheck:
            print num, "= is Bar"
            squareCheck += 1
        elif primeCheck <= 2:
            print num, "= Foo"
        else:
            print num, "= is FooBar"

fooBar()
