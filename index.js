//JavaScript Basics
//Variables: Show how to declare variables using let, const, and var, and explain when to use each one.

let name = "Emma";      // Can be reassigned
const age1 = 25;         // Constant, cannot be reassigned
var isStudent = true;   // Older syntax, avoid if possible

//data types
//Strings, Numbers, Booleans, Null, Undefined, and Objects.

let message = "Hello, world!";   // String
let count = 42;                  // Number
let isActive = true;             // Boolean
let value = null;                // Null
let notDefined;                  // Undefined

/*Operators and Expressions

Arithmetic Operators: +, -, *, /, %
Assignment Operators: =, +=, -=, etc.
Comparison Operators: ==, ===, !=, !==, <, >, <=, >=
Logical Operators: && (AND), || (OR), ! (NOT) */

let a = 10;
let b = 20;
let isEqual = a === b;   // false
let result = a + b;      // 30



/*
Learning Goals
1.  indexing
2.  Define the &&, ! and || operators
3.  control flow 
*/

//loops

/*
 //for loop
 for(Counter;condition;expression){
    code block
 }
 */
 for(let i = 0; i<5; i++){
    console.log(i);
 }

 //use .length property


/*
 //while loop
 declare counter outside the loop
 while(condition){
    code block
    expression
 }
 */

 //condition statements
 /*
 if statement
(checks the condition and excecutes the code once....here we dont use the counter variable)

 */
const age = 20;
if (age>20){
    console.log("you are over 20");
}

//if else 
let score = 75;
if (score > 90) {
    console.log("A");
} else if (score > 80) {
    console.log("B");
} else {
    console.log("C");
}



// project
// build a simple calculator with basic arithmetic functions (addition, subtraction, multiplication, and division).


