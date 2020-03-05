/*// Function Constructor

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


// Object.create

var personProto = {
  calculateAge: function() {
    console.log(2016-this.yearOfBirth);
  }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

// The ABOVE method is not ideal because we have to add all the info line by line.  Object.create DOES let you add a second parameter.

//so

var jane = Object.create(personProto, {
  name: {value:'Jane'},
  yearOfBirth: {value:1969},
  job: {value:'designer'},
});


// Primitives VS Objects


// Primitives
var a = 23;
var b = a;
a = 46;

console.log(a);
console.log(b);


// Objects
var obj1 = {
  name: 'john',
  age: 26
};

var obj2 = obj1;
obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);

// Functions

var age = 27;
var obj = {
  name: 'Jonas',
  city: 'Lisbon'
};

function change(a, b) {
  a = 30;
  b.name = 'Lou';
}

change(age, obj);

console.log(age);
console.log(obj.name);
*/


//////////// Passing functions as arguments /////////////


var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

// Creating another Callback fn to show how powerful this is

function isFullAge(el) {
  return el >= 18;
}

// Adding another to show the max heart rate that applies to an individuals age

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9-(0.67 * el));
  } else {
    return -1;
  }
}

var ages = arrayCalc(years, calculateAge);

var fullAges = arrayCalc(ages, isFullAge);

var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);