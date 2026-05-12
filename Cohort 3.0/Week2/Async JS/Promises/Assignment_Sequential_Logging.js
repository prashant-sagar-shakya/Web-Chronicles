/**
 * Assignment: Sequential Logging using Promises and Async/Await
 * 
 * Goal:
 * 1. Log "hi" after 1 second.
 * 2. Log "hello" 3 seconds after the first step.
 * 3. Log "hi there" 5 seconds after the second step.
 */

// Step 1: Create a promisified version of setTimeout
// This function returns a Promise that resolves after 'ms' milliseconds.
function setTimeoutPromisified(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// Step 2: Create an async function to handle the sequence
// We use 'async' because we want to use 'await' inside it.
async function solve() {
  // Wait for 1 second (1000ms)
  await setTimeoutPromisified(1000);
  console.log("hi");

  // Wait for 3 more seconds (3000ms)
  await setTimeoutPromisified(3000);
  console.log("hello");

  // Wait for 5 more seconds (5000ms)
  await setTimeoutPromisified(5000);
  console.log("hi there");
}

// Step 3: Call the solve function
solve();

// --- EXPLANATION (English) ---
/**
 * 1. setTimeoutPromisified: Traditionally, setTimeout uses callbacks. 
 *    By wrapping it in a Promise, we can use it with 'await'.
 * 
 * 2. await: The 'await' keyword pauses the execution of the 'solve' function 
 *    until the Promise returned by setTimeoutPromisified is resolved.
 * 
 * 3. Sequential Execution: Because of 'await', the code runs line-by-line 
 *    instead of all at once, even though it is asynchronous.
 */

// --- EXPLANATION (Hinglish) ---
/*
1. setTimeoutPromisified: Humne `setTimeout` ko ek Promise mein lapet (wrap) diya hai. 
   Isse fayda ye hai ki ab hum callbacks ki jagah modern `.then()` ya `await` use kar sakte hain.

2. solve Function: Kyunki humein `await` ka use karna tha, isliye humne function ke aage `async` lagaya. 
   JS mein `await` sirf `async` functions ke andar hi kaam karta hai.

3. Step-by-Step Kaam: 
   - Pehla `await` JS ko 1 second rokta hai, phir "hi" print hota hai.
   - Dusra `await` 3 seconds aur rokta hai, phir "hello" print hota hai.
   - Teesra `await` 5 seconds aur rokta hai, phir "hi there" print hota hai.
   
   Ye bilkul synchronous code ki tarah dikhta hai aur padhne mein asan hai!
*/
