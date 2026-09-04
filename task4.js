//Task-1

for(let i = 1; i <= 10; i++){
    console.log(i);
}

///////////////////////////////////////////////////////////////////////

//Task-2

for(let i = 10; i >= 1; i--){
    console.log(i);
}

///////////////////////////////////////////////////////////////////////

//Task-3

for(let i = 1; i <= 20; i++){

    if(i % 2 == 0){
        console.log(i);
    }

}

///////////////////////////////////////////////////////////////////////

//Task-4

for(let i = 1; i <= 20; i++){

    if(i % 2 != 0){
        console.log(i);
    }

}

///////////////////////////////////////////////////////////////////////

//Task-5

let Num = Number(prompt("Enter a number"));

for(let i = 1; i <= 10; i++){

    console.log(`${Num} x ${i} = ${Num * i}`);

}

///////////////////////////////////////////////////////////////////////

//Task-6

let a = 10;

while(a >= 1){

    console.log(a);

    a--;
}

///////////////////////////////////////////////////////////////////////

//Task-7

let number = 1;
let sum = 0;

while(number <= 10){

    sum = sum + number;

    number++;
}

console.log(sum);

///////////////////////////////////////////////////////////////////////

//Task-8

let b = 1;

do{

    console.log(b);

    b++;

}while(b <= 5);

///////////////////////////////////////////////////////////////////////

//Task-9

//10
//b = 10 10 is printed b becomes 11 11 <= 5 → false


///////////////////////////////////////////////////////////////////////

//Task-10

let name = "javascript";

for(let a of name){

    console.log(a);

}

///////////////////////////////////////////////////////////////////////

//Task-11

let fruits = ["apple", "orange", "banana", "mango", "grapes"];

for(let fruit of fruits){

    console.log(fruit);

}

///////////////////////////////////////////////////////////////////////

//Task-12

let students = ["Rohan", "Naveen", "Tushar", "Sujan", "Sudhakaran"];

for(let student of students){

    console.log(`Student: ${student}`);

}

///////////////////////////////////////////////////////////////////////

//Task-13

let employee = {
    name: "Arun",
    age: 25,
    role: "Developer",
    city: "Chennai"
};

for(let key in employee){

    console.log(key, employee[key]);

}
///////////////////////////////////////////////////////////////////////

//Task-14

let product = {
    productName: "Mobile",
    price: 150000,
    brand: "Apple",
    category: "Electronics",
    stock: 20
};

for(let key in product){

    console.log(key, product[key]);

}
///////////////////////////////////////////////////////////////////////


//Task-15

function welcome(){

    console.log("Welcome to JavaScript");

}

welcome();
welcome();
welcome();

///////////////////////////////////////////////////////////////////////

//Task-16

function greet(name){

    console.log(`Hello ${name}`);

}

greet("Naveen");
greet("Arun");
greet("Priya");

///////////////////////////////////////////////////////////////////////

//Task-17

function student(name, age, department){

    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);

}

student("Rohan", 23, "ECE");

student("Naveen", 25, "ISE");

student("Tushar", 23, "CSE");

///////////////////////////////////////////////////////////////////////

//Task-18

function add(a, b){

    return a + b;

}

let result = add(10, 20);

console.log(result);

///////////////////////////////////////////////////////////////////////

//Task-19

function salary(amount){

    return amount;

}

let employeeSalary = salary(150000);

console.log(employeeSalary);

///////////////////////////////////////////////////////////////////////

//Task-20

function bonus(salary, bonusAmount){

    return salary + bonusAmount;

}

let total = bonus(150000, 30000);

console.log(total);

///////////////////////////////////////////////////////////////////////

//Task-21

function employeeinfo(name, role = "Developer"){

    console.log("Name:", name);
    console.log("Role:", role);

}

employeeinfo("Arun");

employeeinfo("Priya", "Designer");

///////////////////////////////////////////////////////////////////////

//Task-22

function square(number){

    return number * number;

}

console.log(square(1));
console.log(square(2));
console.log(square(3));
console.log(square(4));
console.log(square(5));

///////////////////////////////////////////////////////////////////////

//Task-23

let calculate = function(a, b){

    return a + b;

};

let resultAddition = calculate(10, 20);

console.log(resultAddition);

///////////////////////////////////////////////////////////////////////


//Task-24

let multiply = (a, b) => {

    return a * b;

};

let resultMultiplication = multiply(10, 5);

console.log(resultMultiplication);

///////////////////////////////////////////////////////////////////////


//Task-25

//10
//20
//30
//10

function test(){

    if(true){

        var a = 10;
        let b = 20;
        const c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    console.log(a);

}

test();

/*

var is function scoped.

Therefore:
console.log(a);works anywhere inside test().
let and const are block scoped.
Therefore b and c exist only inside:

if (true) {
    ...
}
*/

///////////////////////////////////////////////////////////////////////


//Task-26

//undefined 

//console.log(d);

//var d = 10;

/*
var declaration is hoisted.The variable exists before its assignment,
but its value is undefined.
*/


///////////////////////////////////////////////////////////////////////


//Task-27

//ReferenceError

//console.log(e);
//let e = 20;

//let is hoisted, but it remains in the Temporal Dead Zone until its declaration.

///////////////////////////////////////////////////////////////////////


//Task-28

//ReferenceError

//console.log(f);
//const f = 30;

//const is hoisted, but it remains in the
//Temporal Dead Zone until its declaration.

///////////////////////////////////////////////////////////////////////


//Task-29

 (function(){

    console.log("Welcome to JavaScript");

})();


(function(product, discount){

    console.log(`${product} has ${discount}% discount`);

})("Mobile", 20);

///////////////////////////////////////////////////////////////////////


//Task-30

function welcome(){

    console.log("Welcome");

}

function execute(callback){

    callback();

}

execute(welcome);

//welcome → Callback function

//execute → Higher-order function

//Because welcome is passed as an argument to execute

///////////////////////////////////////////////////////////////////////

// Task-31

function* cashback(){

    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";

}

let allCash = cashback();

for(let value of allCash){

    console.log(value);

}

/////////////////////////////////////////////////////////////////////////

// Task-32

let employees = [

    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },

    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    },

    {
        name: "Kumar",
        age: 28,
        department: "Finance",
        role: "Accountant",
        salary: 45000
    }

];


// 1. FOR...OF
// Print every employee

for(let employee of employees){

    console.log(employee);

}


// 2. FOR...IN
// Print keys and values

for(let employee of employees){

    for(let key in employee){

        console.log(key, employee[key]);

    }

}


// 3 & 4. FUNCTION + PARAMETERS

function displayEmployee(name, age, department, role, salary){

    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
    console.log("Role:", role);
    console.log("Salary:", salary);

}


// Call function

for(let employee of employees){

    displayEmployee(
        employee.name,
        employee.age,
        employee.department,
        employee.role,
        employee.salary
    );

}


// 5. RETURN
// Return employee salary

function getSalary(employee){

    return employee.salary;

}

let salaryEmployee = getSalary(employees[0]);

console.log("Salary:", salaryEmployee);


// 6. CONDITION

for(let employee of employees){

    if(employee.salary >= 40000){

        console.log(`${employee.name} salary is 40000 or above`);

    }else{

        console.log(`${employee.name} salary is below 40000`);

    }

}


// 7. ARROW FUNCTION

let calculateSalary = (salary) => {

    return salary * 12;

};

for(let employee of employees){

    let annualSalary = calculateSalary(employee.salary);

    console.log(`${employee.name} Annual Salary: ${annualSalary}`);

}


// 8. GENERATOR

function* benefits(){

    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";

}

let allBenefits = benefits();

for(let benefit of allBenefits){

    console.log("Employee Benefit:", benefit);

}

/////////////////////////////////////////////////////////////////////////