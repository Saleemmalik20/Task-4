// JavaScript Team Practice Tasks

// LEVEL 1 – Loop Practice

// Task 1 – for...of (String)


// let word = "developer"

// Requirements:
// - Print each character using for...of
// - Count how many letters are there
// - Print only vowels

// Printing Using for-of

let word = "developer";
for(let a of word)
    {
        console.log(a);                 // Output will be "d","e","v","e","l","o","p","e","r" in vertical line.
            
    }

// Counting how many letters are there.

let word = "developer";
for(let a of word)
    {
        console.log(a);
           

    }
    console.log(word.length);           // Output will be 9.

// Printing only vowels.

let word = "developer";
for(let i=0; i<=word.length-1; i++)
{
    let c = word[i];
    if (c=="a"|| c=="e" || c=="i" || c=="o" || c=="u" ||c=="A"|| c=="E"|| c=="I" || c=="O" || c=="U")
        {
             console.log(c)                     // Output will be "e","e","o","e".
        }
}

// Task 2 – for...of (Array)


// let skills = ["HTML","CSS","JavaScript","React"]

// Requirements:
// - Print all skills
// - Print skill with message: I know HTML
// - Count total skills


// Printing all Skills

let skills = ["HTML","CSS","JavaScript","React"];
for(let b of skills){

    console.log(b);                     // Output will be "HTML","CSS","JavaScript","React".
}

// Printing skill with Message : I Know ""

let skills = ["HTML","CSS","JavaScript","React"];
for(let b of skills){

    console.log(`I Know ${b}.`);       // Output will be "I Know HTML." like this.

}

// couting total skills

let skills = ["HTML","CSS","JavaScript","React"];
for(let b of skills){

    console.log(`I Know ${b}.`);
    console.log(skills.length);             // Output will be 4.
    
}

//  Task 3 – for...in (Object)

// let employee = {
// name: "Arun",
// role: "Tester",
// salary: 30000,
// experience: "2 years"
// }

// Requirements:
// - Print all keys
// - Print all values
// - Print: name : Arun


// Printing all keys

let employee = {
name: "Arun",
role: "Tester",
salary: 30000,
experience: "2 years"
}

for(let c in employee)
    {
        console.log(c);                 // Output it will print all the key side values.
        

    }


// Printing all values

let employee = {
name: "Arun",
role: "Tester",
salary: 30000,
experience: "2 years"
}

for(let c in employee)
    {
        console.log(employee[c]);       // Output will be printed the value side values.
        

    }



// Printing name: Arun


let employee = {
name: "Arun",
role: "Tester",
salary: 30000,
experience: "2 years"
}

console.log(employee.name);             // Output will print the name value "Arun".


// LEVEL 2 – Function Practice


// Task 4 – Simple Function

// Create function table(num)
// Print multiplication table of that number.
// Call: table(5)


function table(num)
    {
        for(let a=1; a<=10; a++)
            {
                let result = num * a;
                console.log(`${num} X ${a} = ${num*a}`);           // Print the table 5.    


            }


    }
    
    
table(5);


// Task 5 – Return Keyword

// Create function square(num)

// Return square value.

// Store in variable and print.


function square(num)
    {
        return num;
    
    }

square(200);

let result = square(200);
console.log(result);                        // output will be 200.


// Task 6 – Default Parameter


//Create function register(name, department, role="Developer")

// Call once with role
// Call once without role


function register( name, department, role = "Developer")
    {
        console.log("Name :", name);
        console.log("Department:",department);
        console.log("Role:", role);
        

    }
  
register("saleem","CSE");                   // Output will be Name: saleem, Department : CSE, role is not called in the function so by default the value is given as "Developer".

register("saleem","CSE","Hacker");         // Here we have provided the Role as Hacker.. so it will be displayed instead of "Developer".


// LEVEL 3 – Scope + Hoisting

// Task 7 – Scope Prediction

// function checkScope(){
// if(true){
// var a = 100
// let b = 200
// }
// console.log(a)
// console.log(b)
// }

Questions:
- What will print?
- What error occurs?
- Why?


function checkScope()
{
    if(true)
        {
            var a = 100;
            let b = 200;
        }
console.log(a);
console.log(b);
}


// Print

// Output will be 

console.log(a);                 // Value of a will be printed here.. because a is defined by global variable.It can be acessed anywhere.

console.log(b);                 // This will throw an refference Error because b is defined by blocked variable.

// Task 8 – Hoisting

// console.log(x)
// var x = 10
// console.log(y)
// let y = 20

Explain difference.

console.log(x)                          // undefined value.
var x = 10
console.log(y)                          //reference error
let y = 20


The output is undefined. This is called hoisting.
The declaration var x is "hoisted" to the top of its scope before execution.

  2 output throw reference error. While let declarations are also hoisted,they are placed in a "temporal dead zone" (TDZ)
  from the start of the block until the actual declaration statement is executed.


// LEVEL 4 – Function Types

//Task 9 – Named Function

// Create function greet(name) --> print welcome message.

function greet(name)
    {

        console.log(`Welcome,${name}`);                 // Output will be Welcome, Saleem
        
    }

greet("Saleem");

// Task 10 – Anonymous Function

// Store function in variable that adds two numbers.

let store = function(a,b)
    {
        console.log(a+b);
        

    }

store(5,5);


// Task 11 – Arrow Function


// Create arrow function to subtract two numbers.

let a = 10;
let b = 20;
let ans = (a, b) => a - b;
console.log(ans(a, b));


// LEVEL 5 – Callback & Higher Order

// Task 12 – Callback

//Create function calculate(operation, a, b)

//Create:

// - add function
// - subtract function

// Call:
// calculate(add, 10, 5)
// calculate(subtract, 20, 10)


function calculate(operation,a,b){
    
    operation(a,b);
    
}

function add(a,b){

    console.log(a+b);                            // Output will print the value of a=10 b=5 "a+b=15";    
    
}

function sub(a,b){

    console.log(a-b);                           v// Output will print the value of a=20 b=10 "a-b=10";    
}
calculate(add,10,5);
calculate(sub,20,10);


// LEVEL 6 – Currying

// Task 13

// function total(a){
// return function(b){
// return function(c){
// }
// }
// }

// Should print sum.
// Example: total(5)(10)(15)


function total(a){
    return function(b){
        return function(c){
            console.log(a+b+c);                 // Output will be 30
            

        }
    }
}

total(5)(10)(15);


// LEVEL 7 – Generator

// Task 14 – Reward Generator

// Create generator function* reward()

// Yield:
// - "Level 1 Completed"
// - "Level 2 Completed"
// - "Level 3 Completed"
// - "Team Winner"
// Use:
// - .next()
// - for...of

// Using .next()

function* reward(){

    yield "Level 1 Completed"
    yield "Level 2 Completed"
    yield "Level 3 Completed"
    yield "Team Winner"
}

let team = reward();
// console.log(team);
console.log(team.next().value);                     // output will be "Level 1 Completed".
console.log(team.next().value);                     // output will be "Level 2 Completed".                     
console.log(team.next().value);                     // output will be "Level 3 Completed".
console.log(team.next().value);                     // output will be "Team Winner".



// Using for-of

let rewards = ["Level 1 Completed","Level 2 Completed","Level 3 Completed","Team Winner"];
for(let a of rewards){

    console.log(a);                             // Output will be -Level 1 Completed,Level 2 Completed,Level 3 Completed, Team Winner. 
    
}




// FINAL TEAM CHALLENGE

// Build small system using ONLY above concepts:

// Requirements:
// - Object ® team details
// - for...in ® print details
// - Generator ® rewards
// - Callback ® score calculation
// - Default parameter
// - Currying for bonus calculation
// - Named + Arrow function
// Everything in one file.


// creating object and giving the team value

let teams ={

    Name : "Shaik Saleem Malik",
    Role : "Developer",
    Location : "Hyderabad",
    Salary : 200000,
    DOB : "20-09-1992"
};

// Using for - in to print the details.

for(let c in teams){
    
    console.log(`${c} : ${teams[c]}`);
    
}


// Generator --> rewards

function * reward(){
    yield "Flexible working Hours"
    yield "Remote Woking Mode"
    yield "Paid Vacation for weekends"
}

let gift =reward();
console.log(gift.next().value);
console.log(gift.next().value);
console.log(gift.next().value);


// Callback -> score calculation

function scoreCalculation(operation,a,b){

        operation(a,b);

}

function add(a,b){

    console.log(a+b);
    
}

scoreCalculation(add,10,5);


// Default parameter

function team( Name,Location, Salary, DOB, Role = "Developer" )
    {
        console.log("Name :", Name);
        console.log("Role:", Role);
        console.log("Location:", Location);
        console.log("Salary:", Salary);
        console.log("DOB:", DOB);  
    
    }



team( "Kiran","hyderabad",600000,"10-06-1992",);



// Currying for bonus calculation

function bonusCalculation(bonus){
    return function(salary){
        console.log("Bonus : ", bonus+salary );
        
    }
}
bonusCalculation(10000)(600000);


// named Function

function welcome(name){
    console.log("Hello",name, "Welcome to Team");
    
}
welcome("Shaik Saleem Malik");
