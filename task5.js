//Q1

// var → can be redeclared and reassigned.
// let → cannot be redeclared in the same scope, but can be reassigned.
// const → cannot be redeclared or reassigned. 

//Eg: 

var a = 10;
var a = 20;

let b = 10;
b = 20;

const c = 10;
// c = 20;  // Error

//////////////////////////////////////////////////////////////////

//Q2

//var can be re-declared, while let and const cannot be re-declared in the same scope.

let d = 10;
// let d = 20;  // Error

const e = 10;
// const e = 20;  // Error

//////////////////////////////////////////////////////////////////

//Q3

var x = 5;
let y = 10;
const z = 15;

x = 20;
y = 25;
//z = 30;

console.log(x, y, z);

//Output: TypeError

//z is a const variable, so it cannot be reassigned.

//////////////////////////////////////////////////////////////////

//Q4

//Declaration means creating a variable.

let f;

//Initialization means giving the variable its first value.

//let f = 10;

//Example: 

//let f;       // declaration
//let g = 20;  // declaration + initialization


//////////////////////////////////////////////////////////////////

//Q5

//Output:

//undefined

// Because a is declared but no value is assigned.

//////////////////////////////////////////////////////////////////

//Q6

//Hoisting means JavaScript processes certain declarations before executing the code.

//Example with var:

console.log(a);

var g= 10;

//Output:

//undefined

//The var declaration is hoisted, but the value 10 is assigned later.

//////////////////////////////////////////////////////////////////

//Q7

//undefined means a variable has been declared but has not been given a value.

let h;
console.log(h);

//Output:

//undefined

//null means we intentionally assign an empty/no value.

let i = null;
console.log(i);

//Output:

//null

//////////////////////////////////////////////////////////////////

//Q8

console.log(typeof null);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof {});

//Outputs:
//object
//undefined
//object
//object

//////////////////////////////////////////////////////////////////

//Q9

// == Loose equality, checks value and can perform type conversion.

console.log(5 == "5");

//Output:

//true

//=== Strict equality, checks value and data type.

console.log(5 === "5");

//Output:

//false

//////////////////////////////////////////////////////////////////

//Q10

//++i → pre-increment. It increases the value first.

let j = 5;
console.log(++j);

//Output:

//6

//i++ → post-increment. It uses the value first and then increases it.

let k = 5;
console.log(k++);
console.log(k);

//Output:

//5
//6

//////////////////////////////////////////////////////////////////

//Q11

//Outputs:

//105
//5
//50
//2


//////////////////////////////////////////////////////////////////

//Q12

//There are three main logical operators:

//&& — AND

//Both conditions must be true.

console.log(5 > 3 && 10 > 5);

//Output:

//true


//|| — OR

//At least one condition must be true.

console.log(5 > 10 || 10 > 5);

//Output:

//true


//! — NOT

//Reverses the result.

console.log(!(5 > 3));

//Output:

//false


//////////////////////////////////////////////////////////////////

//Q13

//true
//true
//false

//////////////////////////////////////////////////////////////////

//Q14

//The ternary operator is a short way of writing an if-else.

//Syntax:

//condition ? trueValue : falseValue;

//Example:

let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);

//Output:

//Adult


//////////////////////////////////////////////////////////////////

//Q15

// Implicit type casting happens automatically by JavaScript.

let l = 10;
let m = "5";

console.log(l + m);

//Output:

//105

//JavaScript automatically converts the number into a string for +.

// Explicit type casting is done manually by the programmer.

let n= "10";

console.log(Number(n));

//Output:

//10


//////////////////////////////////////////////////////////////////

//Q16

//Outputs:
//123
//NaN
//1
//0
//false
//true

//////////////////////////////////////////////////////////////////

//Q17

//NaN means Not a Number.

//It occurs when JavaScript tries to convert something into a number but cannot.

//Example:

let o = Number("hello");

console.log(o);

//Output:

//NaN

//////////////////////////////////////////////////////////////////


//Q18

//if-else is useful when checking conditions or ranges.

let age11 = 20;

if(age11 >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

//switch is useful when checking different fixed values.

let day1 = 2;

switch(day1) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid");
}
//////////////////////////////////////////////////////////////////


//Q19

//Output:
//Adult

//////////////////////////////////////////////////////////////////


//Q20

//A nested if means putting one if statement inside another if.

//Example:

let age3 = 20;
let height = 160;

if(age3 >= 18) {
    if(height >= 160) {
        console.log("Allowed");
    }
}

//Output:

//Allowed

//////////////////////////////////////////////////////////////////


//Q21

let number = 10;

let result1 = number % 2 == 0 ? "Even" : "Odd";

console.log(result1);

//////////////////////////////////////////////////////////////////


//Q22

//while

//The condition is checked before executing the loop.

let p = 10;

while(p <= 5) {
    console.log(p);
}

//Nothing will print.

//do-while

//The code executes at least once, then the condition is checked.

let q = 10;

do {
    console.log(q);
} while(q <= 5);

//Output:

//10


//////////////////////////////////////////////////////////////////


//Q23

//Output:
//1
//2
//3
//4
//5

//////////////////////////////////////////////////////////////////


//Q24

//for-of

//Used to get values from arrays or strings.

let arr = ["apple", "orange", "banana"];

for(let a of arr) {
    console.log(a);
}

//Output:

//apple
//orange
//banana


//for-in

//Used to get keys/indexes.

let obj = {
    name: "Arun",
    age: 25
};

for(let a in obj) {
    console.log(a);
}

//Output:

//name
//age

//////////////////////////////////////////////////////////////////


//Q25

let sum=0;
for(let i=1; i<=100;i++){
    sum=sum+i;
}
console.log(sum);

//////////////////////////////////////////////////////////////////


//Q26

//slice()

//Used to get a portion of an array.

//It does not change the original array.

let arr1 = [1, 2, 3, 4, 5];

let result2 = arr1.slice(1, 4);

console.log(result2);
console.log(arr1);

//Output:

//[2, 3, 4]
//[1, 2, 3, 4, 5]


//splice()

//Used to add/remove/replace values in the original array.

let arr2 = [1, 2, 3, 4, 5];

arr2.splice(1, 2);

console.log(arr2);

//Output:

//[1, 4, 5]

//////////////////////////////////////////////////////////////////


//Q27

//[1, 2, 3]
//push(4)    → [1, 2, 3, 4]
//pop()      → [1, 2, 3]
//unshift(0) → [0, 1, 2, 3]
//shift()    → [1, 2, 3]

//Final Output:
    
//[1, 2, 3]

//////////////////////////////////////////////////////////////////


//Q28

//Function Declaration

//The function is directly declared using function.

function greet() {
    console.log("Hello");
}

greet();


//Function Expression

//The function is stored inside a variable.

let greet1 = function() {
    console.log("Hello");
};

greet1();
//////////////////////////////////////////////////////////////////

//Q29

//An arrow function is a shorter way to write a function.

//Normal function:

function add(a, b) {
    return a + b;
}

//Arrow function:

let add1 = (a, b) => {
    return a + b;
};

console.log(add1(10, 20));

//Output:

//30
//////////////////////////////////////////////////////////////////

//Q30

//Output:
//Hello

//////////////////////////////////////////////////////////////////



