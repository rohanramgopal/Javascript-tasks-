//Task-1 
var studentName1 = "Naveen";
let studentAge1 = 25;
const studentCity1 = "Trichy";
const studentCollege1 = "ABC College";

console.log(studentName1);
console.log(studentAge1);
console.log(studentCity1);
console.log(studentCollege1);

studentName1 = "Rohan";
studentAge1 = 26;

// studentCity1 = "Chennai";
// studentCollege1 = "XYZ College";

console.log(studentName1);
console.log(studentAge1);

// var can be redeclared
var studentName1 = "Naveen";


// let studentAge1 = 30;
// const studentCity1 = "Chennai";
// let and const cannot be redeclared

console.log(studentName1);

//////////////////////////////////////////////////////////////////

//Task-2

console.log("Hello from console");

alert("Hello from alert");

confirm("Do you want to continue?");

let userName2 = prompt("Enter your name");

document.writeln("Hello " + userName2);

//////////////////////////////////////////////////////////////////

//Task-3

let userName3 = prompt("Enter your name");
let userAge3 = prompt("Enter your age");
let userCity3 = prompt("Enter your city");
let userQualification3 = prompt("Enter your qualification");

console.log("Name:", userName3);
console.log("Age:", userAge3);
console.log("City:", userCity3);
console.log("Qualification:", userQualification3); 

//////////////////////////////////////////////////////////////////

//Task-4

let dataString4 = "JavaScript";
let dataNumber4 = 100;
let dataDecimal4 = 99.5;
let dataTrue4 = true;
let dataFalse4 = false;
let dataUndefined4;
let dataNull4 = null;

console.log(dataString4);
console.log(typeof (dataString4));

console.log(dataNumber4);
console.log(typeof (dataNumber4));

console.log(dataDecimal4);
console.log(typeof (dataDecimal4));

console.log(dataTrue4);
console.log(typeof (dataTrue4));

console.log(dataFalse4);
console.log(typeof (dataFalse4));

console.log(dataUndefined4);
console.log(typeof (dataUndefined4));

console.log(dataNull4);
console.log(typeof (dataNull4));

//////////////////////////////////////////////////////////////////

//Task-5

let students5 = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];

console.log("First student:", students5[0]);
console.log("Second student:", students5[1]);
console.log("Last student:", students5[students5.length - 1]);
console.log("Total students:", students5.length);

//////////////////////////////////////////////////////////////////

//Task-6

let employee6 = {
    name: "Rohan",
    age: 22,
    role: "Python Developer",
    skills: ["Python", "JavaScript", "SQL"],
    isWorking: true,
    qualification: ["BE", "MTech"]
};

console.log("Employee Name:", employee6.name);
console.log("Age:", employee6.age);
console.log("Role:", employee6.role);
console.log("First Skill:", employee6.skills[0]);
console.log("Last Qualification:", employee6.qualification[employee6.qualification.length - 1]);
console.log("Working Status:", employee6.isWorking);

//////////////////////////////////////////////////////////////////

//Task-7

let calculatorC = 20;
let calculatorD = 5;

console.log("Addition:", Number(calculatorC) + Number(calculatorD));
console.log("Subtraction:", calculatorC - calculatorD);
console.log("Multiplication:", calculatorC * calculatorD);
console.log("Division:", calculatorC / calculatorD);
console.log("Modulus:", calculatorC % calculatorD);
console.log("Exponentiation:", Number(calculatorC) ** Number(calculatorD));

//////////////////////////////////////////////////////////////////

//Task-8

let shirtPrice = 999;
let pantPrice = 1499;
let shoesPrice = 1999;
let bagPrice = 799;

let totalPrice = shirtPrice + pantPrice + shoesPrice + bagPrice;

console.log("Total Price:", totalPrice);

//////////////////////////////////////////////////////////////////


//Task-9

//11
//10

let postIncrementA9 = 10;
let postIncrementB9 = postIncrementA9++;

console.log("A - a:", postIncrementA9);
console.log("A - b:", postIncrementB9);


//11
//11

let preIncrementA9 = 10;
let preIncrementB9 = ++preIncrementA9;

console.log("B - a:", preIncrementA9);
console.log("B - b:", preIncrementB9);

//9
//10

let postDecrementA9 = 10;
let postDecrementB9 = postDecrementA9--;

console.log("C - a:", postDecrementA9);
console.log("C - b:", postDecrementB9);


//9
//9

let preDecrementA9 = 10;
let preDecrementB9 = --preDecrementA9;

console.log("D - a:", preDecrementA9);
console.log("D - b:", preDecrementB9);

//////////////////////////////////////////////////////////////////

//Task-10


let Num10 = 10;

Num10 += 5;

console.log("After += 5:", Num10);



let Num10Minus = 10;

Num10Minus -= 3;

console.log("After -= 3:", Num10Minus);



let Num10Multiply = 10;

Num10Multiply *= 2;

console.log("After *= 2:", Num10Multiply);



let Num10Divide = 10;

Num10Divide /= 4;

console.log("After /= 4:", Num10Divide);


let Num10Modulus = 10;

Num10Modulus %= 3;

console.log("After %= 3:", Num10Modulus);



let Num10Power = 10;

Num10Power **= 2;

console.log("After **= 2:", Num10Power);

//////////////////////////////////////////////////////////////////

//Task-11

//true
//false
//true
//false
//true
//false
//false
//true

console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 9);

console.log(5 == "5");
console.log(5 === "5");

console.log(10 != "10");
console.log(10 !== "10");


//////////////////////////////////////////////////////////////////

//Task-12

//true
//false
//false
//false

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

//////////////////////////////////////////////////////////////////

//Task-13

//true
//true
//true
//false

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

//////////////////////////////////////////////////////////////////

//Task-14

//false
//true
//true
//false

console.log(!true);
console.log(!false);
console.log(!(5 > 10));
console.log(!(10 > 5));

//////////////////////////////////////////////////////////////////


//Task-15

//false
//true
//true
//true

console.log(5 == "5" && !(5 === 5) || 6 > 7);

console.log(10 > 5 && 8 < 12 || 4 === "4");

console.log(7 === 7 && 10 != "10" || 5 >= 5);

console.log(15 < 10 || 20 > 15 && 5 == "5");

//////////////////////////////////////////////////////////////////


//Task-16

let votingAge = 20;

votingAge >= 18 ? console.log("Eligible to vote"): console.log("Not eligible to vote");

//////////////////////////////////////////////////////////////////


//Task-17

let passwordStatus = true;

passwordStatus  ? console.log("Login successful"): console.log("Wrong password");

//////////////////////////////////////////////////////////////////


//Task-18

let Name18 = "Naveen";
let Age18 = 25;
let City18 = "Trichy";

// Using +

console.log(
    "My name is " + Name18 +
    ". I am " + Age18 +
    " years old. I live in " + City18 + "."
);


// Using template string

console.log(
    `My name is ${Name18}. I am ${Age18} years old. I live in ${City18}.`
);

//////////////////////////////////////////////////////////////////


//Task-19

let Value19A = String(100);
let Value19B = String(true);
let Value19C = String(undefined);
let Value19D = String(null);
let Value19E = String([1, 2]);

console.log(Value19A);
console.log(typeof (Value19A));

console.log(Value19B);
console.log(typeof (Value19B));

console.log(Value19C);
console.log(typeof (Value19C));

console.log(Value19D);
console.log(typeof (Value19D));

console.log(Value19E);
console.log(typeof (Value19E));

//////////////////////////////////////////////////////////////////


//Task-20

//0
//0
//123
//NaN
//1
//0
//NaN
//0

console.log(Number());
console.log(Number(""));
console.log(Number("123"));
console.log(Number("a1"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(undefined));
console.log(Number(null));

//////////////////////////////////////////////////////////////////


//Task-21

//false
//false
//true
//true
//true
//false
//false
//true
//true 

console.log(Boolean());
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean(123));
console.log(Boolean(true));
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean([]));
console.log(Boolean({}));


//////////////////////////////////////////////////////////////////


//Task-22

let voterAge = (prompt("Enter your age"));

if(voterAge >= 18){
    console.log("You can vote");
}else{
    console.log("You can't vote");
}

//////////////////////////////////////////////////////////////////


//Task-23

let checkNumber = Number(prompt("Enter a number"));

if(checkNumber > 0){
    console.log("Positive");
}else if(checkNumber < 0){
    console.log("Negative");
}else{
    console.log("Zero");
}


//////////////////////////////////////////////////////////////////


//Task-24

let studentMarks = Number(prompt("Enter your marks"));

if(studentMarks >= 90 && studentMarks <= 100){
    console.log("A Grade");
}else if(studentMarks >= 80 && studentMarks <= 89){
    console.log("B Grade");
}else if(studentMarks >= 70 && studentMarks <= 79){
    console.log("C Grade");
}else if(studentMarks >= 60 && studentMarks <= 69){
    console.log("D Grade");
}else{
    console.log("Fail");
}

//////////////////////////////////////////////////////////////////


//Task-25

let jobAge = Number(prompt("Enter your age"));
let jobHeight = Number(prompt("Enter your height in cm"));
let jobWeight = Number(prompt("Enter your weight in kg"));

if(jobAge >= 18){

    if(jobHeight >= 160){

        if(jobWeight >= 60){
            console.log("Congratulations! You are selected");
        }else{
            console.log("Your weight is not enough");
        }

    }else{
        console.log("Your height is not enough");
    }

}else{
    console.log("Your age is not enough");
}

//////////////////////////////////////////////////////////////////


//Task-26

let trafficColor = prompt("Enter traffic light color");

switch(trafficColor){

    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid color");
        break;
}

//////////////////////////////////////////////////////////////////



//Task-27

let dayNumber = 1;

switch(dayNumber){

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
        break;
}
//////////////////////////////////////////////////////////////////


//Task-28

// Student Details

let resultName = prompt("Enter your name");
let resultAge = Number(prompt("Enter your age"));
let resultCity = prompt("Enter your city");


// Marks

let resultTamil = Number(prompt("Enter Tamil marks"));
let resultEnglish = Number(prompt("Enter English marks"));
let resultMaths = Number(prompt("Enter Maths marks"));


// Total

let resultTotal = resultTamil + resultEnglish + resultMaths;


// Average

let resultAverage = resultTotal / 3;


// Grade

let resultGrade;

if(resultAverage >= 90){
    resultGrade = "A";
}else if(resultAverage >= 80){
    resultGrade = "B";
}else if(resultAverage >= 70){
    resultGrade = "C";
}else if(resultAverage >= 60){
    resultGrade = "D";
}else{
    resultGrade = "Fail";
}


// Voting

let resultVoting;

if(resultAge >= 18){
    resultVoting = "Eligible";
}else{
    resultVoting = "Not Eligible";
}


// Display

console.log(`
Name: ${resultName}
Age: ${resultAge}
City: ${resultCity}
Total: ${resultTotal}
Average: ${resultAverage}
Grade: ${resultGrade}
Voting: ${resultVoting}
`);

//////////////////////////////////////////////////////////////////



