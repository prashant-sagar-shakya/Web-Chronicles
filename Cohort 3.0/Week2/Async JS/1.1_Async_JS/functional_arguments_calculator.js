/**
 * WHAT ARE FUNCTIONAL ARGUMENTS?
 * 
 * In JavaScript, you can pass a FUNCTION as an argument to another function.
 * 
 * Think of it like this:
 * 1. A normal argument is like passing a "Thing" (a number, a string).
 * 2. A functional argument is like passing a "Task" or a "Tool".
 * 
 * You are telling the main function: "Here are some numbers, 
 * and here is the TOOL you should use to process them."
 */

// ==========================================
// CALCULATOR PROGRAM
// ==========================================

// These are our "Tool" functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) return "Error: Cannot divide by zero!";
    return a / b;
}

/**
 * WHAT IS @param? (JSDoc)
 * 
 * Lines starting with @param are called "JSDoc comments".
 * They are used for DOCUMENTATION.
 * 
 * Why do we need it?
 * 1. Readability: It tells other programmers what kind of data the function needs.
 * 2. Editor Help: When you hover over the 'calculator' function later, 
 *    VS Code will show you these notes to help you remember what num1 and num2 are.
 * 3. Type Checking: {number} tells us we expect a number, not a string or boolean.
 * 
 * It is NOT code that runs, but it is VERY important for professional developers.
 * 
 * The Main Calculator Function
 * It takes three arguments:
 * @param {number} num1 - The first number
 * @param {number} num2 - The second number
 * @param {function} operation - The FUNCTIONAL ARGUMENT (the logic to apply)
 */
function calculator(num1, num2, operation) {
    console.log(`\nOperation started with numbers: ${num1} and ${num2}`);
    
    // Here, we "call" the function that was passed to us
    const result = operation(num1, num2);
    
    console.log(`Result: ${result}`);
}

// ==========================================
// HOW TO USE IT
// ==========================================

// We pass the function NAMES as arguments (without parentheses)

console.log("--- Calculator Demo ---");

calculator(10, 5, add);       // Passing 'add' function
calculator(10, 5, subtract);  // Passing 'subtract' function
calculator(10, 5, multiply);  // Passing 'multiply' function
calculator(10, 5, divide);    // Passing 'divide' function

/**
 * WHY IS THIS USEFUL?
 * It makes your code very flexible. You can create a new math 
 * operation (like power or square root) and use it with the 
 * SAME calculator function without changing the calculator's code!
 */

/**
 * =========================================================================
 * SUMMARY (Hinglish) 
 * =========================================================================
 * 1. FUNCTIONAL ARGUMENTS: Iska matlab hai function ke andar doosra 
 *    function pass karna. Hum "logic" ko as a variable pass kar rahe hain.
 * 
 * 2. @param (JSDoc): Ye comments humein batate hain ki function ko kis 
 *    tarah ka input chahiye. Ye documentation ke liye best hai.
 * 
 * 3. REUSABILITY: Ek hi 'calculator' function alag-alag kaam kar sakta 
 *    hai, bas humein sahi "tool" (function) pass karna hota hai.
 * =========================================================================
 */
