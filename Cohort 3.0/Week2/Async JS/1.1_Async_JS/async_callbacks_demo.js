const fs = require("fs");

/**
 * WHAT IS ASYNCHRONOUS CODE?
 * It is code that starts a task now but finishes it LATER. 
 * JavaScript does not wait for the task to finish; it moves to the next line.
 * 
 * WHAT IS A CALLBACK?
 * A callback is a function that you pass as an argument to another function.
 * This callback function will "CALL BACK" (run) only when the task is finished.
 * 
 * Analogy:
 * You order a Pizza (Start Async Task).
 * You give them your Phone Number (This is the Callback).
 * You go home and watch TV (Code continues to run).
 * They call you when Pizza is ready (The Callback runs!).
 */

// ==========================================
// EXAMPLE: Using fs.readFile with a Callback
// ==========================================

console.log("--- 1. STARTING FILE READ ---");

// Here, (err, data) => { ... } is our CALLBACK function.
fs.readFile("a.txt", "utf-8", (err, data) => {
    console.log("\n[3. CALLBACK RUNNING] File is finished reading!");
    if (err) {
        console.log("Error:", err);
    } else {
        console.log("Content found:", data.trim());
    }
});

console.log("--- 2. THIS LINE RUNS IMMEDIATELY ---");
console.log("JavaScript did not wait for the file read to finish.\n");


// ==========================================
// EXAMPLE: Creating our own Callback function
// ==========================================

/**
 * A function that simulates a long task (like a timer)
 * @param {function} callbackFunc - The function to run after the task
 */
function myCustomAsyncTask(callbackFunc) {
    console.log("Task started... waiting for 2 seconds...");
    
    // setTimeout is a built-in async function
    setTimeout(() => {
        const message = "The long task is finally DONE!";
        callbackFunc(message); // We run the callback here
    }, 2000);
}

// How to use our custom async function with a callback
myCustomAsyncTask((result) => {
    console.log("\n[4. CUSTOM CALLBACK] Received result:", result);
});

console.log("--- 5. MAIN CODE CONTINUES ---");


// =========================================================================
// 6. CPU INTENSIVE vs I/O INTENSIVE (The Event Loop)
// =========================================================================

/**
 * CONCEPT: 
 * JavaScript is "Single Threaded". It can only do one thing at a time.
 * Even if an Async task (like reading a file) is finished in the background, 
 * its callback MUST WAIT until the main CPU task (like a for-loop) is done.
 */

console.log("\n--- 6. STARTING EVENT LOOP DEMO ---");

// We start reading a file (Asynchronous I/O)
fs.readFile("a.txt", "utf-8", (err, data) => {
    console.log("\n[!!!] CALLBACK: Finally, the file read callback is running!");
});

// Now we start a very heavy CPU task (Synchronous)
console.log("Main Thread: Starting a heavy for-loop (CPU Intensive)...");

let sum = 0;
for (let i = 0; i < 1000000000; i++) {
    sum += i;
}

console.log("Main Thread: Heavy for-loop is DONE!");
console.log("Main Thread: Now the stack is empty, so the callback can run.");

/**
 * =========================================================================
 * SUMMARY (Hinglish) 
 * =========================================================================
 * 1. ASYNCHRONOUS CODE: Wo code jo background me chalta hai. JavaScript 
 *    wait nahi karta, seedha agli line par chala jata hai.
 * 
 * 2. CALLBACK: Wo function jo hum tab chalate hain jab async kaam khatam 
 *    ho jata hai. Ye function hum argument ki tarah pass karte hain.
 * 
 * 3. ANALOGY: Jaise restaurant me token milta hai (Async Start), aap baith 
 *    ke phone chalate ho (Next Line Code), aur jab buzzer bajta hai toh 
 *    aap khana lene jate ho (Callback Execution).
 * 
 * 4. WHY IT MATTERS: Iski wajah se humara program "freeze" nahi hota. 
 *    User ko intazar nahi karna padta jab tak file read ho rahi ho.
 * =========================================================================
 */
