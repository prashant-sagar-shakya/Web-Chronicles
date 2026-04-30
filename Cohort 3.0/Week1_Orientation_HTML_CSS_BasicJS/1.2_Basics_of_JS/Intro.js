// [1] Interpreted Language
// What it means: Programs like C++ or Java need to be "Compiled" (converted to a 
// complete machine-code file) before they run. 
// JavaScript is "Interpreted," meaning the engine reads the code line by line 
// and executes it immediately. It's like having a live translator instead of 
// waiting for the whole book to be translated.
console.log("Interpreted means I run line-by-line!");

// [2] Dynamically Typed
// What it means: In languages like C++, you must say "this is a number" and 
// it stays a number forever. 
// In JavaScript, variables are flexible. You can store a number, then later 
// store a string in the same variable.
let myValue = 100;    // Starts as a number
myValue = "Hello";    // Now it's a string! No error!
console.log(myValue);

// [3] Single Threaded
// What it means: JavaScript can only do ONE thing at a time. It has only one 
// "call stack" or one path of execution. 
// However, it uses clever tricks (the Event Loop) to handle things like 
// network requests without freezing the whole site.
console.log("I am single-threaded. I do one thing at a time.");

// [4] Garbage Collected & Memory Management
/* 
   Memory management is how a language handles computer memory. 
   Based on the diagram (Memory Management.png), there are 3 main ways:
   
   1. Garbage Collector (JS, Java): 
      - Written by smart people.
      - Automatically cleans up memory.
      - No "dangling pointers" or common memory errors.
      - You cannot manage memory manually.
      
   2. Manual Management (C):
      - You must allocate and deallocate memory yourself.
      - Very risky: can lead to memory leaks or errors.
      - High learning curve.
      
   3. The Rust Way:
      - Uses an "Ownership" model.
      - Extremely safe and prevents memory errors automatically.
*/
let temp = { name: "I will be cleaned up soon" };
temp = null; // The Garbage Collector will now free up the memory used by that object.

// [5] Is JavaScript a good language?
/* 
   The answer is a big YES!
   - Versatile: You can build websites (React), servers (Node.js), and mobile apps (React Native).
   - Massive Community: If you have a problem, someone has already solved it on Stack Overflow.
   - Modern: With ES6 and beyond, JS is very powerful and clean.
*/
console.log("JavaScript is the most popular language in the world!");
