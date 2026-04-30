/* 
This file covers the building blocks of JavaScript:
    1. Variables (var, let, const)
    2. Data Types
    3. Operators
    4. Functions
*/

// [1] VARIABLES: How we store data
// var: The old way. It has some "scoping" issues. Avoid using it in modern JS.
// let: The modern way. Use this for variables that WILL change.
// const: Short for "Constant". Use this for values that will NOT change.

let currentScore = 10; // This can change
currentScore = 15;      // Correct

const birthYear = 2000; // This cannot change
// birthYear = 2001;    // Error! Constant values stay the same.

var oldWay = "I am old"; // Works, but 'let' is better.


// [2] DATA TYPES: What kind of data are we storing?
let name = "Harkirat";      // String (Text)
let age = 21;               // Number (Integer/Decimal)
let isStudent = true;       // Boolean (True or False)
let emptyValue = null;      // Null (Intentional empty value)
let notDefined;             // Undefined (Variable exists but has no value)
let user = {                // Object (Collection of data)
    firstName: "Harkirat",
    age: 21
};
let scores = [10, 20, 30];  // Array (List of data)


// [3] OPERATORS: Doing math and comparisons
let x = 10;
let y = 5;

// Arithmetic
console.log(x + y); // 15 (Addition)
console.log(x - y); // 5  (Subtraction)
console.log(x * y); // 50 (Multiplication)
console.log(x / y); // 2  (Division)

// Comparison (Return true or false)
console.log(x > y);  // true
console.log(x === y); // false (Check if they are exactly equal)
console.log(x !== y); // true  (Check if they are NOT equal)


// [4] FUNCTIONS: Reusable blocks of code
// A function is like a "Machine". You give it "Input", it does some work, and gives "Output".

function greetUser(userName) { // userName is the Input (Parameter)
    return "Hello, " + userName + "!"; // return gives the Output
}

// How to use (Call) the function:
let message = greetUser("Student");
console.log(message); // Output: Hello, Student!
