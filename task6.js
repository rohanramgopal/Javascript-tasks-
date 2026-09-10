//Task-1 

let name = prompt("Enter student name");
let department = prompt("Enter department");

let mark1 = Number(prompt("Enter subject 1 mark"));
let mark2 = Number(prompt("Enter subject 2 mark"));
let mark3 = Number(prompt("Enter subject 3 mark"));
let mark4 = Number(prompt("Enter subject 4 mark"));
let mark5 = Number(prompt("Enter subject 5 mark"));

function result(name, department, mark1, mark2, mark3, mark4, mark5) {

    let total = mark1 + mark2 + mark3 + mark4 + mark5;

    let average = total / 5;

    let pass;

    if(average >= 50) {
        pass = "Pass";
    } else {
        pass = "Fail";
    }

    let grade;

    if(average >= 90) {
        grade = "A";
    } else if(average >= 75) {
        grade = "B";
    } else if(average >= 60) {
        grade = "C";
    } else if(average >= 50) {
        grade = "D";
    } else {
        grade = "Fail";
    }

    console.log("Name:", name);
    console.log("Department:", department);
    console.log("Total:", total);
    console.log("Average:", average);
    console.log("Result:", pass);
    console.log("Grade:", grade);
}

result(name, department, mark1, mark2, mark3, mark4, mark5);

/////////////////////////////////////////////////////////////

//Task-2

let employee = {
    name: "Arun",
    role: "Developer",
    salary: 45000,
    experience: 2
};

function calculateSalary(employee) {

    let salary = employee.salary;
    let bonus = 0;

    if(employee.experience >= 5) {
        bonus = salary * 15 / 100;
    } else if(employee.experience >= 2) {
        bonus = salary * 10 / 100;
    }

    let finalSalary = salary + bonus;

    console.log("Name:", employee.name);
    console.log("Role:", employee.role);
    console.log("Basic Salary:", salary);
    console.log("Bonus:", bonus);
    console.log("Final Salary:", finalSalary);
}

calculateSalary(employee);

/////////////////////////////////////////////////////////////

//Task-3

let products = [
    { name: "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "Shoes", price: 2500, category: "fashion" },
    { name: "Phone", price: 30000, category: "electronics" }
];

// 1. Products above 2000

let result1 = products.filter(function(a) {
    return a.price > 2000;
});

console.log(result1);


// 2. Only electronics

let result2 = products.filter(function(a) {
    return a.category == "electronics";
});

console.log(result2);


// 3. First product below 1000

let result3 = products.find(function(a) {
    return a.price < 1000;
});

console.log(result3);


// 4. Total price

let result4 = products.reduce(function(a, b) {
    return a + b.price;
}, 0);

console.log(result4);


// 5. Any product above 50000

let result5 = products.some(function(a) {
    return a.price > 50000;
});

console.log(result5);


// 6. Every product above 500

let result6 = products.every(function(a) {
    return a.price > 500;
});

console.log(result6);

/////////////////////////////////////////////////////////////

//Task-4

let employees = [
    {
        id: 101,
        name: "Kavin",
        role: "Frontend Developer",
        salary: 40000
    },
    {
        id: 102,
        name: "Naveen",
        role: "Backend Developer",
        salary: 50000
    },
    {
        id: 103,
        name: "Rohan",
        role: "Full Stack Developer",
        salary: 85000
    },
    {
        id: 104,
        name: "Priya",
        role: "Python Developer",
        salary: 65000
    },
    {
        id: 105,
        name: "Tushar",
        role: "Java Developer",
        salary: 80000
    },
    {
        id: 106,
        name: "Sujan",
        role: "Software Engineer",
        salary: 100000
    }
];


// 1. Display all employee names

let result12 = employees.map(function(a) {
    return a.name;
});

console.log(result12);


// 2. Employees earning above 40000

let result22 = employees.filter(function(a) {
    return a.salary > 40000;
});

console.log(result22);


// 3. Find employee with ID 103

let result23 = employees.find(function(a) {
    return a.id == 103;
});

console.log(result23);


// 4. Total salary

let result24 = employees.reduce(function(a, b) {
    return a + b.salary;
}, 0);

console.log(result24);


// 5. Highest-paid employee

let result25 = employees.reduce(function(a, b) {
    return a.salary > b.salary ? a : b;
});

console.log(result25);


// 6. Sort highest to lowest

let result26 = employees.sort(function(a, b) {
    return b.salary - a.salary;
});

console.log(result26);


// 7. Only employee names

let result27 = employees.map(function(a) {
    return a.name;
});

console.log(result27);

/////////////////////////////////////////////////////////////

//Task-5

let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];

function calculateCart(cart) {

    let total = cart.reduce(function(a, b) {
        return a + (b.price * b.quantity);
    }, 0);

    let discount = 0;

    if(total > 50000) {
        discount = total * 10 / 100;
    }

    let final = total - discount;

    console.log("Total Cart Value:", total);
    console.log("Discount:", discount);
    console.log("Final Payable Amount:", final);
}

calculateCart(cart);

/////////////////////////////////////////////////////////////

//Task-6 

let students = [
    { name: "Arun", age: 21, mark: 85 },
    { name: "Priya", age: 22, mark: 92 },
    { name: "Karthi", age: 20, mark: 67 },
    { name: "Dinesh", age: 23, mark: 45 }
];


// 1. All student names

let result31 = students.map(function(a) {
    return a.name;
});

console.log(result31);


// 2. Students above 80

let result32 = students.filter(function(a) {
    return a.mark > 80;
});

console.log(result32);


// 3. Find Priya

let result33 = students.find(function(a) {
    return a.name == "Priya";
});

console.log(result33);


// 4. Average mark

let result34 = students.reduce(function(a, b) {
    return a + b.mark;
}, 0);

let average = result34 / students.length;

console.log(average);


// 5. Anyone failed?

let result35 = students.some(function(a) {
    return a.mark < 50;
});

console.log(result35);


// 6. Everyone above 40?

let result36 = students.every(function(a) {
    return a.mark > 40;
});

console.log(result36);


// 7. Sort by marks

let result37 = students.sort(function(a, b) {
    return b.mark - a.mark;
});

console.log(result37);

/////////////////////////////////////////////////////////////

//Task-7

let numbers = [12, 5, 8, 21, 44, 7, 30, 15];


// 1. Numbers × 2

let result41 = numbers.map(function(a) {
    return a * 2;
});

console.log(result41);


// 2. Even numbers

let result42 = numbers.filter(function(a) {
    return a % 2 == 0;
});

console.log(result42);


// 3. Numbers greater than 15

let result43 = numbers.filter(function(a) {
    return a > 15;
});

console.log(result43);


// 4. First number greater than 20

let result44 = numbers.find(function(a) {
    return a > 20;
});

console.log(result44);


// 5. Total

let result45 = numbers.reduce(function(a, b) {
    return a + b;
}, 0);

console.log(result45);


// 6. Any number greater than 40

let result46 = numbers.some(function(a) {
    return a > 40;
});

console.log(result46);


// 7. Every number positive

let result47 = numbers.every(function(a) {
    return a > 0;
});

console.log(result47);


// 8. Highest to lowest

let result48 = numbers.sort(function(a, b) {
    return b - a;
});

console.log(result48);

/////////////////////////////////////////////////////////////

//Task-8 

let sentence = prompt("Enter a sentence");

console.log("Total characters:", sentence.length);

console.log("Uppercase:", sentence.toUpperCase());

console.log("Lowercase:", sentence.toLowerCase());

console.log("Contains JavaScript:", sentence.includes("Javascript"));

console.log("First character:", sentence.slice(0, 1));

console.log("Last character:", sentence.slice(-1));

let words = sentence.split(" ");

console.log("Number of words:", words.length);

console.log("Replace:", sentence.replace("Javascript", "Python"));

console.log("Array:", words);

/////////////////////////////////////////////////////////////

//Task-9 

let employees1 = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];


// 1. Employee List

console.log("All Employees:");

employees1.forEach(function(a) {
    console.log(a);
});


// 2. Search employee by name

let search = employees1.find(function(a) {
    return a.name == "Priya";
});

console.log("Search:", search);


// 3. Department Filter

let department1 = employees1.filter(function(a) {
    return a.department == "IT";
});

console.log("IT Employees:", department1);


// 4. Salary Filter

let salary1 = employees1.filter(function(a) {
    return a.salary > 50000;
});

console.log("Salary above 50000:", salary1);


// 5. Total company salary

let total = employees1.reduce(function(a, b) {
    return a + b.salary;
}, 0);

console.log("Total Salary:", total);


// 6. Highest salary

let highest = employees1.reduce(function(a, b) {
    return a.salary > b.salary ? a : b;
});

console.log("Highest Salary:", highest.salary);


// 7. Experience more than 3 years

let experience = employees1.filter(function(a) {
    return a.experience > 3;
});

console.log("Experience above 3:", experience);


// 8. Low to High

let low = [...employees1].sort(function(a, b) {
    return a.salary - b.salary;
});

console.log("Low to High:", low);


// High to Low

let high = [...employees1].sort(function(a, b) {
    return b.salary - a.salary;
});

console.log("High to Low:", high);


// 9. Statistics

let average55 = total / employees1.length;

console.log("Total Employees:", employees1.length);
console.log("Total Salary:", total);
console.log("Highest Salary:", highest.salary);
console.log("Average Salary:", average55);

/////////////////////////////////////////////////////////////