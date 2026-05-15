/**
 * ASYNC/AWAIT SOLUTION (The Modern Way)
 * 
 * This is the ultimate way to solve Callback Hell. 
 * We define an "async" function and use "await" to wait for each promise.
 * The code looks exactly like synchronous code (top to bottom).
 */

// We reuse the promisified function
function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// --- THE CLEANEST SOLUTION ---
// We define the sequence inside an async function.
// This is "defining the function outside" to handle the async logic separately.
async function solveCallbackHell() {
    // Wait for 1 second
    await setTimeoutPromisified(1000);
    console.log("hi");

    // Wait for 3 seconds
    await setTimeoutPromisified(3000);
    console.log("hello");

    // Wait for 5 seconds
    await setTimeoutPromisified(5000);
    console.log("hello there");
}

// Call the function to start the sequence
solveCallbackHell();

console.log("outside the async function"); 
// This still runs immediately!


/**
 * --- HINGLISH SUMMARY ---
 * 
 * Async/Await kya hai?
 * Ye Promises ko handle karne ka sabse latest aur best tareeka hai. 
 * `async` keyword function ke saath use hota hai, aur `await` use hota hai 
 * promise ke resolve hone ka wait karne ke liye.
 * 
 * Ye better kyun hai?
 * 1. No Nesting: Isme koi `.then()` ya nested callbacks nahi hote.
 * 2. Readable: Code bilkul synchronous (line-by-line) dikhta hai, 
 *    isliye isse samajhna bahut easy hai.
 * 3. Linear flow: Ye callback hell ko poori tarah khatam kar deta hai.
 */
