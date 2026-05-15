const fs = require("fs");

/**
 * ERROR-FIRST CALLBACKS VS REJECTS IN PROMISES
 * 
 * In Node.js, there are two main ways to handle errors in asynchronous code.
 */

// --- 1. ERROR-FIRST CALLBACK APPROACH ---
// Traditionally, Node.js functions like fs.readFile pass the error as the FIRST argument.

function afterDone(err, data) {
    if (err) {
        // If 'err' exists, it means something went wrong
        console.log("Callback: Error while reading file");
    } else {
        // If 'err' is null, we have the data
        console.log("Callback Data:", data);
    }
}

// Reading a file that might not exist to trigger an error
fs.readFile("non_existent_file.txt", "utf-8", afterDone);


// --- 2. PROMISES (REJECT) APPROACH ---
// Promises use the 'reject' function to send back errors.

function readFilePromisified(filePath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filePath, "utf-8", function (err, data) {
            if (err) {
                // Instead of a callback, we 'reject' the promise
                reject("Promise: Error while reading file");
            } else {
                // On success, we 'resolve' the promise
                resolve(data);
            }
        });
    });
}

// Usage with .then() and .catch()
readFilePromisified("a.txt")
    .then(function (data) {
        console.log("Promise Success:", data);
    })
    .catch(function (error) {
        // Any error from 'reject' ends up here
        console.log("Promise Caught Error:", error);
    });


/**
 * --- HINGLISH SUMMARY ---
 * 
 * Error handling ke do bade tareeke:
 * 
 * 1. Error-First Callbacks: 
 * Purana tareeka hai. Isme function ka pehla argument hamesha `err` hota hai. 
 * Hum check karte hain `if (err)` toh error handle karo, nahi toh data use karo.
 * 
 * 2. Promises (Reject):
 * Naya tareeka hai. Isme hum `reject()` ka use karte hain error bhejne ke liye. 
 * Iska fayda ye hai ki hum `.catch()` block use kar sakte hain error pakadne ke liye, 
 * jisse code bahut clean ho jata hai.
 */
