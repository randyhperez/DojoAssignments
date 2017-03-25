// Part I of assignment
var students = [
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
]

function themStudents() {
  for (var i = 0; i < students.length; i++) {
    console.log(students[i].first_name + " " + students[i].last_name);
  }
}

themStudents(students)

// Part II of assignment

var users = {
 'Students': [
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }

function themUsers() {
  console.log("Students");
  for (var x = 0; x < users.Students.length; x++) {
    console.log((x + 1) + " - " + users.Students[x].first_name + " " + users.Students[x].last_name + " " + (users.Students[x].first_name.length + users.Students[x].last_name.length));
  }
  console.log("Instructors");
  for (var x = 0; x < users.Instructors.length; x++) {
    console.log((x + 1) + " - " + users.Instructors[x].first_name + " " + users.Instructors[x].last_name + " " + (users.Instructors[x].first_name.length + users.Instructors[x].last_name.length));
  }
}
 themUsers(users)
