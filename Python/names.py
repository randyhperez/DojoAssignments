students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }

# print users['Students'][0]

# def namesOne(datList):
#     for item in datList:
#         print item["first_name"], item["last_name"]
#
# namesOne(students)

def namesTwo(datList):
    counter = 0
    for item in datList:
        print item
        for person in datList[item]:
            counter += 1
            fName = person["first_name"]
            lName = person["last_name"]
            print counter, "-", fName, lName, "-", len(fName) + len(lName)

namesTwo(users)
