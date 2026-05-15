/**
 * CALLBACK HELL EXAMPLE
 * 
 * Problem Statement:
 * 1. Log "hi" after 1 second.
 * 2. Log "hello" 3 seconds AFTER the first log.
 * 3. Log "hello there" 5 seconds AFTER the second log.
 */

// --- SOLUTION 1: NESTED CALLBACKS (CALLBACK HELL) ---
// This is called "Callback Hell" because the code grows horizontally (to the right)
// instead of vertically. It becomes hard to read and manage.

setTimeout(function () {
    // Step 1: Runs after 1000ms (1 second)
    console.log("hi");

    setTimeout(function () {
        // Step 2: Runs after another 3000ms (3 seconds)
        console.log("hello");

        setTimeout(function () {
            // Step 3: Runs after another 5000ms (5 seconds)
            console.log("hello there");

        }, 5000); // 5 seconds wait

    }, 3000); // 3 seconds wait

}, 1000); // 1 second wait

console.log("outside the callback hell"); 
// This line runs IMMEDIATELY because setTimeout is asynchronous (non-blocking).


// --- SOLUTION 2: ALT SOLUTION (NAMED FUNCTIONS) ---
// To avoid deep nesting, we can define functions outside and pass them as callbacks.
// This is "better than promise chaining" in terms of flatness if you don't know Promises.

function step3Done() {
    // This is the final step
    console.log("hello there");
}

function step2Done() {
    // After logging "hello", we start the 5-second timer for the next step
    console.log("hello");
    setTimeout(step3Done, 5000);
}

function step1Done() {
    // After logging "hi", we start the 3-second timer for the next step
    console.log("hi");
    setTimeout(step2Done, 3000);
}

// Start the sequence: Wait 1 second, then call step1Done
setTimeout(step1Done, 1000);


/**
 * --- HINGLISH SUMMARY ---
 * 
 * Callback Hell kya hota hai?
 * Jab hum ek async task ke andar doosra, aur doosre ke andar teesra task karte hain 
 * (using nested functions), toh code "C" shape ya "Pyramid" jaisa ban jata hai. 
 * Isse "Pyramid of Doom" ya "Callback Hell" kehte hain. 
 * Isse code padhna aur debug karna bahut mushkil ho jata hai.
 * 
 * Solution kya hai?
 * 1. Named Functions: Functions ko bahar define karo (step1Done, step2Done) taaki 
 *    nesting kam ho jaye.
 * 2. Promises: Inhe use karke code ko linear (upar se neeche) likha ja sakta hai.
 */
