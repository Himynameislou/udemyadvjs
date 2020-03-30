/*
/// Function Constructor

var john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher'
};

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


////////////// Functions returning functions

function interviewQuestion(job) {
  if (job === 'designer') {
    return function(name) {
      console.log(name + ' , can you please explain what UX design is?');
    }
  } else if (job === 'teacher') {
    return function(name) {
      console.log('What subject do you teach, ' + name + '?');
    }
  } else {
    return function(name) {
      console.log('Hello ' + name + ', what do you do?');
    }
  }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');
designerQuestion('Mark');
designerQuestion('Mike');

interviewQuestion('teacher')('Mark');


// My own icebreaker
function iceBreaker(hobby) {
  if (hobby === 'playing ball') {
    return function(name) {
      console.log('What sort of ball do you play ' + name + '?');
    }
  } else if (hobby === 'blogging') {
    return function(name) {
      console.log(name + ', blogs are fun, can I read yours?');
    }
  } else {
    return function(name) {
      console.log(name + ', tell me what it is that you like to do on your free time');
      
    }
  }
}

iceBreaker('playing ball')('Lou');
iceBreaker('playing ball')('Sarah');
iceBreaker('blogging')('Lou');
iceBreaker('blogging')('Lyndon');
iceBreaker('dancing')('Carmela');

/////////////////////////////////
//Immediately Invoked Function Expressions (IIFE)

// One way to do this by using the skills we know

function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}
game();

// The problem with the above code is that in this game we want it all to be private sooooo look below

// IIFE

(function() {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

// console.log(score);

// Adding Good Luck to increase winning odds

// we can always make it true

(function(goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);

// console.log(score);


//////////////////////////
///Lecture: Closures


function retirement(retirementAge) {
  var a = ' years left until retirement.';
  return function(yearOfBirth) {
    var age = 2016-yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}

var retirementUS = retirement(66);
retirementUS(1990);
// retirement(66)(1990);

var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementIceland(1990);








//////////////// Lecture: Bind, Call and Apply


var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function(style, timeOfDay) {
    if (style === 'formal') {
      console.log('Good ' + timeOfDay + ', Ladies and gentleman! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
    } else if (style === 'friendly') {
      console.log('Hey, what\'s up? I\'m ' + this.name + ', I\'m ' + this.job + ' and I\'m ' + this.age + ' years old. ' + 'Have a nice ' + timeOfDay + '.');
    }
  }
};

//Using a new object. Emily.  That does not have the presentation method.  So we use the Call Method

var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
};

// Call Method Below
john.presentation.call(emily, 'friendly', 'afternoon');

var lou = {
  name: 'Lou',
  age: 36,
  job: 'freelance designer/philosopher'
}

john.presentation.call(lou, 'formal', 'evening');
john.presentation.call(lou, 'friendly', 'afternoon');

john.presentation('formal', 'morning');
john.presentation('formal', 'evening');
john.presentation('friendly', 'morning');
john.presentation('friendly', 'evening');

//Apply Method to current example

// john.presentation.apply(emily, [])
// For this example it does work for us bc our method isnt using arrays.  But we will use it in a further example

// Bind Method

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('evening');

var emilyFormal = john.presentation.bind(emily, 'formal');

emilyFormal('afternoon');

var louFriendly = john.presentation.bind(lou, 'friendly');
louFriendly('morning');
*/



/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

// Coding Challenge

(function() {

  
  function Question (question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }
  
  Question.prototype.displayQuestion = function() {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    }
  };
  
  Question.prototype.checkAnswer = function(ans) {
    if ( ans === this.correct) { 
      console.log('Correct Answer!');
    } else {
      console.log('WRONG!')
    }
  }
  
  var q1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', 'No'], 0);
  
  var q2 = new Question('What is the name of this course\'s teacher?', ['John', 'Michael', 'Jonas'],2);
  
  var q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tedious'],2);
  
  var questions = [q1,q2,q3];
  var n = Math.floor(Math.random() * questions.length);
  
  questions[n].displayQuestion();
  
  var answer = parseInt(prompt('Please select the correct answer.'));
  
  questions[n].checkAnswer(answer);
})();