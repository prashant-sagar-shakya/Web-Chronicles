/**
 * ASYNC AWAIT SYNTAX & ASSIGNMENT
 * 
 * DEFINITION:
 * The 'async' and 'await' syntax in JavaScript provides a way to write asynchronous 
 * code that looks and behaves like synchronous code. 
 * 
 * It makes the code easier to read and maintain. 
 * It builds on top of Promises and allows you to avoid chaining .then() and .catch() 
 * while still working with asynchronous operations.
 * 
 * 'async/await' is essentially "syntactic sugar" on top of Promises.
 */

// --- PROMISIFIED FUNCTION ---
// We need this function to use 'await'
function setTimeoutPromisified(ms) {
    // Returns a promise that resolves after 'ms' milliseconds
    return new Promise(resolve => setTimeout(resolve, ms));
}

// --- ASSIGNMENT SOLUTION ---
// Task: 
// 1. Log "hi" after 1 second.
// 2. Log "hello" 3 seconds after step 1.
// 3. Log "hello there" 5 seconds after step 2.

async function solve() {
    await setTimeoutPromisified(1000);
    console.log("hi");

    await setTimeoutPromisified(3000);
    console.log("hello");

    await setTimeoutPromisified(5000);
    console.log("hi there");
}

solve();

/**
 * --- THINGS TO KEEP IN MIND ---
 * 
 * 1. You can only call 'await' inside a function if that function is 'async'.
 * 2. You cant have a 'top level await' (in most common environments like older Node.js).
 */

/**
 * --- HINGLISH SUMMARY ---
 * 
 * Async/Await kya hai?
 * Ye asynchronous code likhne ka ek simple tareeka hai. Isse code padhne mein 
 * bilkul synchronous (seedha) lagta hai. 
 * 
 * Syntactic Sugar:
 * Iska matlab hai ki ye internally Promises hi use karta hai, lekin humein 
 * `.then()` ki lambi chains nahi likhni padti. Code saaf (clean) dikhta hai.
 * 
 * Important Baatein:
 * 1. Aap `await` tabhi use kar sakte hain jab aapka function `async` ho. 
 *    Agar normal function mein `await` likhenge toh error aayega.
 * 2. `top level await` nahi use kar sakte. Matlab function ke bahar 
 *    khule mein `await` nahi likh sakte (old version node mein).
 */
