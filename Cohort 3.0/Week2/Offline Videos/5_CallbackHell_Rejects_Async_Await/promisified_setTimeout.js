/**
 * PROMISIFIED VERSION OF SETTIMEOUT
 * 
 * Instead of using callbacks, we wrap setTimeout in a Promise.
 * This allows us to use .then() or async/await.
 */

// --- THE PROMISIFIED FUNCTION ---
function setTimeoutPromisified(ms) {
    // We return a new Promise object
    // 'resolve' is a function that we call when the timer is finished
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
}

// --- SOLUTION 1: PROMISE CHAINING (Linear way) ---
// This avoids the "Pyramid" shape by returning a new promise in each .then()
setTimeoutPromisified(1000)
    .then(function () {
        console.log("hi");
        // Return the next promise to keep the chain flat
        return setTimeoutPromisified(3000);
    })
    .then(function () {
        console.log("hello");
        // Return the next promise
        return setTimeoutPromisified(5000);
    })
    .then(function () {
        console.log("hello there");
    });

// --- SOLUTION 2: THE "NESTED" PROMISE WAY (As seen in some slides) ---
// Note: This is still a bit messy because it nests .then inside .then
/*
setTimeoutPromisified(1000).then(function() {
    console.log("hi");
    setTimeoutPromisified(3000).then(function() {
        console.log("hello");
        setTimeoutPromisified(5000).then(function() {
            console.log("hello there");
        });
    });
});
*/


/**
 * --- HINGLISH SUMMARY ---
 * 
 * Promisified setTimeout kya hai?
 * Normal setTimeout callback use karta hai, jo nesting badhata hai. 
 * Promisified version mein hum setTimeout ko ek Promise ke andar wrap kar dete hain. 
 * Iska fayda ye hai ki hum `.then()` use kar sakte hain ya fir `async/await`.
 * 
 * Promise Chaining kaise kaam karti hai?
 * Har `.then()` ke andar hum agla promise `return` karte hain. 
 * Isse code nested nahi hota, balki ek seedhi line (chain) mein chalta hai. 
 * Ye callback hell se bachne ka ek clean tareeka hai.
 */
