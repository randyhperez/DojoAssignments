def compareArrays(l1,l2):
    counter = 0
    if len(l1) == len(l2):
        for num in range (0, len(l1)):
            if l1[num] != l2[num]:
                print "The lists are not the same"
                break
            else:
                counter += 1
            if counter == len(l1):
                print "The lists are the same"
    else:
        print "The lists are not the same"

compareArrays(['celery','carrots','bread','milk'], ['celery','carrots','bread','cream'])
