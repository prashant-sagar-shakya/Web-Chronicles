// PROMISES

/**
 * 1. OFFICIAL DEFINITION
 * A Promise in JavaScript is an object that represents the eventual completion (or failure) 
 * of an asynchronous operation and its resulting value. Promises are used to handle 
 * asynchronous operations more effectively than traditional callback functions, 
 * providing a cleaner and more manageable way to deal with code that executes 
 * asynchronously, such as API calls, file I/O, or timers.
 */

// ---------------------------------------------------------

/**
 * 2. THE STORY ANALOGY (FOR BEGINNERS)
 * 
 * Story: You went to a Pizza shop.
 * 1. You placed an order (Asynchronous Task).
 * 2. The cashier gave you a 'Receipt'.
 * 3. This Receipt is a 'Promise' that you will receive your pizza in the future.
 * 
 * Three things can happen (States):
 * - PENDING: The pizza is still being prepared. You are using your phone (Non-blocking).
 * - RESOLVED: The pizza is ready! You get your pizza.
 * - REJECTED: The oven broke down. Order cancelled.
 */

// ---------------------------------------------------------

/**
 * 3. DEEP DIVE: THE "SITUATIONSHIP" ANALOGY (WHY DO WE NEED PROMISES?)
 * 
 * Bhai, do you like situationships? Nahi na. 
 * Ya toh haan bolo ya na, beech mein latka ke kyu rakhna hai? 
 * 
 * Exactly yahi inspiration thi Promises ki! 
 * Jab hum koi Async function chalate hain, toh kya pata wo execute hi na ho? 
 * Promises isi problem ko solve karte hain: "Ya toh kaam poora karke bata (Resolve), 
 * ya fail ho jaye toh bhi bata (Reject)... par gayab mat ho jana!"
 * 
 * --- How it works internally? ---
 * When you create `new Promise(function(resolve, reject) { ... })`:
 * 
 * 1. Why pass a function? 
 *    Smart programmers ne socha ki code ko execute karne ka sabse efficient tarika 
 *    function hi hai. Ye internal execution ko asan banata hai.
 * 
 * 2. What are resolve and reject?
 *    Ye wo functions hain jo hume "inform" karte hain:
 *    - resolve(data): "Bhai, kaam ho gaya! Ye lo tera data." 
 *    - reject(error): "Bhai, gadbad ho gayi! Ye error dekh le."
 * 
 * 3. Where does the data go?
 *    Jab aap `resolve("Success")` call karte ho, toh ye data seedha `.then()` ke paas jata hai.
 *    `.then()` ek callback function accept karta hai jo us data ko use kar sake.
 * 
 * 4. What about Reject?
 *    Jab aap `reject("Error")` call karte ho, toh ye `.catch()` block mein jata hai. 
 *    Wahan aap error handle kar sakte ho.
 * 
 * REMEMBER: .then() humesha ek naya Promise return karta hai.
 */

// ---------------------------------------------------------

/**
 * 3. BASIC CREATION AND CONSUMPTION
 */

// Creating a Promise
const pizzaOrder = new Promise((resolve, reject) => {
  const isOvenWorking = true; 

  console.log("Pizza is being prepared...");

  setTimeout(() => {
    if (isOvenWorking) {
      resolve("The hot pizza is ready!"); // Success (Resolved)
    } else {
      reject("Sorry, the oven is broken."); // Failure (Rejected)
    }
  }, 3000); 
});

// Consuming the Promise
pizzaOrder
  .then((message) => {
    // Runs if resolve() is called
    console.log("SUCCESS: " + message);
  })
  .catch((error) => {
    // Runs if reject() is called
    console.log("FAILURE: " + error);
  })
  .finally(() => {
    // Always runs at the end
    console.log("Back home from the pizza shop.");
  });

// ---------------------------------------------------------

/**
 * 4. PROMISIFICATION (TRANSITION FROM CALLBACKS)
 */

// Traditional Callback version:
// setTimeout(() => { console.log("Done"); }, 3000);

// Promisified version:
function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Why it's cleaner:
function callback() {
  console.log("5 seconds have passed (using Promise)");
}

// Consuming it (Syntactically Cleaner)
setTimeoutPromisified(5000).then(callback);

// ---------------------------------------------------------

/**
 * 5. THE PROBLEM: CALLBACK HELL VS THE SOLUTION: PROMISE CHAINING
 */

// CALLBACK HELL (The "Pyramid of Doom")
// Hard to read, hard to debug.
function callbackHell() {
  setTimeout(() => {
    console.log("Step 1 done");
    setTimeout(() => {
      console.log("Step 2 done");
      setTimeout(() => {
        console.log("Step 3 done");
      }, 1000);
    }, 1000);
  }, 1000);
}

// PROMISE CHAINING (The Clean Way)
// We return a new promise in each .then() to keep the code flat.
function promiseChaining() {
  setTimeoutPromisified(1000)
    .then(() => {
      console.log("Step 1 (Promise) done");
      return setTimeoutPromisified(1000); 
    })
    .then(() => {
      console.log("Step 2 (Promise) done");
      return setTimeoutPromisified(1000);
    })
    .then(() => {
      console.log("Step 3 (Promise) done");
    });
}

// ---------------------------------------------------------

// DETAILED SUMMARY IN HINGLISH:
/*
1. Promise = Vada: 
   - JS mein jab koi kaam time leta hai, toh hum Promise use karte hain. 
   - Yeh ek object hai jo future mein result dene ka vada karta hai.

2. Teen States:
   - Pending: Kaam chal raha hai.
   - Resolved: Kaam kamyabi se poora ho gaya.
   - Rejected: Kaam fail ho gaya.

3. Callback Hell (Pyramid of Doom):
   - Jab callbacks ke andar callbacks nest hote hain, toh code horizontal badhne lagta hai. 
   - Isse manage karna bahut mushkil ho jata hai.

4. Promise Chaining (The Solution):
   - `.then()` ka use karke hum ek ke baad ek asynchronous kaam kar sakte hain bina code ko nest kiye.
   - Har `.then()` mein agla Promise "return" karna zaroori hai.

5. Promisification:
   - Purane callback-style functions (jaise `setTimeout`) ko modern Promise format mein badalna.

6. Key terms:
   - `resolve`: Success signal bhejna.
   - `reject`: Error signal bhejna.
   - `.then()`: Success par agla step.
   - `.catch()`: Error handle karna.
*/
