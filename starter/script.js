// Function Constructor

// var john = {
//   name: 'John',
//   yearOfBirth: 1990,
//   job: 'teacher'
// };

// Using Function Constructors to create a blueprint for more constructors
// Convention is to use Capital letter not lowercase like i a variable

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

// Using Inheritance

Person.prototype.calculateAge = function() {
  console.log(2016 - this.yearOfBirth);
}


// Now test it.
john.calculateAge();
jane.calculateAge();
mark.calculateAge();

// Using inheritance to add properties
// this is not very common but Max wanted us to learn about this as well
// John Jane and Mark will now all have the last name of Smith
Person.prototype.lastName = 'Smith';

var Historian = function(name, speciality, eraOFFocus) {
  this.name = name;
  this.speciality = speciality;
  this.eraOFFocus = eraOFFocus;
}

var sarah = new Historian('Sarah', 'Reconstruction', 'Late 1800s');
var lou = new Historian('Lou', 'Renaissance Architecture', 'Late 1600s');
var lyndon = new Historian('Lyndon', 'JFK', 'Late 1960s');

// console.log(sarah, lou, lyndon);
