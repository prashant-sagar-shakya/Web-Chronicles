/* 
    ================================================================
    ASSIGNMENT 1: THE SUM FUNCTION
    ================================================================
    Task: Write a function 'sum' that finds the sum of two numbers.
    Challenge: What happens if we pass a String instead of a Number?
*/

// Function definition
function sum(a, b) {
    return a + b;
}

// Case 1: Passing two numbers
let result1 = sum(10, 20);
console.log("Sum of 10 and 20 is: " + result1); // Output: 30

// Case 2: Passing a String and a Number
let result2 = sum("10", 20);
console.log("Sum of '10' and 20 is: " + result2); // Output: "1020"

/* 
   QUESTION: What happened in Case 2?
   ANSWER: 
   JavaScript is very smart but also a bit funny. 
   When you use the '+' sign between a String and a Number:
   1. It thinks you want to "Concatenate" (Join) them together.
   2. It converts the Number into a String.
   3. It sticks them side-by-side like text.
   
   So, "10" + 20 becomes "1020" instead of 30.
*/

// Case 3: Passing two strings
let result3 = sum("Hello ", "World");
console.log("Sum of 'Hello ' and 'World' is: " + result3); // Output: "Hello World"