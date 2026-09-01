//Task-1

var studentName = "Naveen";
let studentAge = 22;
const collegeName = "ABC College";

console.log(studentName);
console.log(studentAge);
console.log(collegeName);

studentName = "Rohan";
studentAge = 23;
//collegeName = "XYZ College";

console.log(studentName);
console.log(studentAge);

// const cannot be reassigned

// var redeclared
var studentName = "Naveen";
//let studentAge = 25;
console.log(studentName);

// let cannot be redeclared

///////////////////////////////////////////////////////////////

//Task-2

let name = prompt("Enter your name");
var age = prompt("Enter your age");
let city = prompt("Enter your city");

console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);

////////////////////////////////////////////////////////////////

//Task-3


alert("Welcome " + name + "!");

///////////////////////////////////////////////////////////////////


//Task-4

let birthYear = prompt("Enter your birth year");

let currentYear = 2026;

var age = currentYear - birthYear;

console.log("Birth Year:", birthYear);
console.log("Age:", age);

/////////////////////////////////////////////////////////////////

//Task-5 

let text = "Hello";
let number = 100;
let decimal = 25.5;
let trueValue = true;
let falseValue = false;
let empty;
let nullValue = null;

console.log(typeof text);
console.log(typeof number);
console.log(typeof decimal);
console.log(typeof trueValue);
console.log(typeof falseValue);
console.log(typeof empty);
console.log(typeof nullValue);

/////////////////////////////////////////////////////////////////

//Task-6 

let student = {
    name: "Naveen",
    age: 22,
    city: "Trichy",
    qualification: "BE",
    isStudent: true
};

console.log(student);

console.log(student.name);
console.log(student.age);
console.log(student.qualification);
console.log(student.isStudent);

//////////////////////////////////////////////////////////////

//Task-7

let fruits = [
    "Apple",
    "Mango",
    "Orange",
    "Banana",
    "Grapes",
    "Papaya"
];

console.log(fruits[0]);

console.log(fruits[1]);

console.log(fruits[fruits.length - 1]);

console.log(fruits.length);


//////////////////////////////////////////////////////////////

//Task-8 

let a = 20;
let b = 5;

console.log("Addition:", a + b);

console.log("Subtraction:", a - b);

console.log("Multiplication:", a * b);

console.log("Division:", a / b);

console.log("Modulus:", a % b);

console.log("Exponentiation:", a ** b);

//////////////////////////////////////////////////////////////

// Task-9

let shirt = 999;
let pant = 1499;
let shoes = 1999;

let total = shirt + pant + shoes;

console.log("Total:", total);

//////////////////////////////////////////////////////////////

// Task-10

let tamil = 80;
let english = 75;
let maths = 90;

let total1 = tamil + english + maths;

let average = total1 / 3;

console.log("Total Marks:", total1);

console.log("Average Marks:", average);
//////////////////////////////////////////////////////////////

// Task-11

//outputs:
//11
//10

let c = 10;

let d = c++;

console.log(c);
console.log(d);


//////////////////////////////////////////////////////////////

// Task-12

//Outputs:
//11
//11

let e = 10;

let f = ++e;

console.log(e);
console.log(f);


//////////////////////////////////////////////////////////////

// Task-13

//Outputs:
//19
//20

let g = 20;

let h = g--;

console.log(g);
console.log(h);

//////////////////////////////////////////////////////////////

// Task-14

//Outputs:
//19
//19

let i = 20;

let j = --i;

console.log(i);
console.log(j);

//////////////////////////////////////////////////////////////

// Task-15

//Outputs:
//7
//4
//7
//5

let p = 5;

let q = p++;

let r = ++p;

let s = q--;

console.log(p);
console.log(q);
console.log(r);
console.log(s);

//////////////////////////////////////////////////////////////

// Task-16

let num = 10;

num += 5;

console.log(num);

let num1 = 10;

num1 -= 5;

console.log(num1);

let num2 = 10;

num2 *= 5;

console.log(num2);


let num3 = 10;

num3 /= 5;

console.log(num3);


let num4 = 10;

num4 %= 5;

console.log(num4);

let num5 = 10;

num5 **= 5;

console.log(num5);


//////////////////////////////////////////////////////////////

// Task-17

let profileName = "Naveen";
let profileage = 22;
let profilecity = "Trichy";
let profilecollege = "ABC College";

let subjects = [
    "Tamil",
    "English",
    "Maths",
    "Science",
    "Computer"
];

let profilestudent = {
    name: profileName,
    age: profileage,
    city: profilecity,
    subjects: subjects,
    isStudent: true
};

console.log("Student Name:", profilestudent.name);

console.log("Student Age:", profilestudent.age);

console.log("City:", profilestudent.city);

console.log("First Subject:", subjects[0]);

console.log("Last Subject:", subjects[subjects.length - 1]);

console.log("Total Subjects:", subjects.length);

console.log(profilestudent);

//////////////////////////////////////////////////////////////

//Task-18

let k = prompt("Enter first number");

let l = prompt("Enter second number");

console.log("Addition:", k+l);

console.log("Subtraction:", k - l);

console.log("Multiplication:", k * l);

console.log("Division:", k / l);

console.log("Modulus:", k % l);

console.log("Power:", k ** l);