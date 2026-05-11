const fs = require("fs");

/**
 * WHAT IS A PROMISE?
 * A Promise is an object that represents a future value.
 * It has two main outcomes:
 * 1. Success (Resolve)
 * 2. Failure (Reject)
 */

// 1. Promisifying setTimeout
// This function waits for a certain amount of time and then finishes.
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(); // This means the wait is over
    }, ms);
  });
}

// 2. Promisifying a Fake Fetch
// This function simulates downloading data from the internet.
function myFetch(url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success! Data received from: " + url);
    }, 1000); // It takes 1 second to "download" the data
  });
}

// 3. Promisifying fs.readFile
// This function reads a file from your computer.
function readFilePromise(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject("Error: File not found or could not be read."); // The promise fails
      } else {
        resolve(data); // The promise succeeds and returns the file text
      }
    });
  });
}


// ==========================================
// HOW TO USE THEM (Simple Examples)
// ==========================================

// Example 1: Using the timer
delay(2000).then(() => {
  console.log("1. Timer: 2 seconds have passed.");
});

// Example 2: Using the fake fetch
myFetch("https://google.com").then((result) => {
  console.log("2. Fetch:", result);
});

// Example 3: Reading a file
// Note: Make sure the file exists!
readFilePromise("example_file_for_Readfile.txt")
  .then((content) => {
    console.log("3. File Content:", content);
  })
  .catch((error) => {
    console.log("3. File Error:", error);
  });

/**
 * =========================================================================
 * SUMMARY (Hinglish) 
 * =========================================================================
 * 1. PROMISE: Ye ek "Vada" (Commitment) hai jo ya toh pura hoga (Resolve) 
 *    ya toot jayega (Reject).
 * 
 * 2. PROMISIFICATION: Purane callback-style functions (jaise setTimeout) 
 *    ko Promise me wrap karne ke process ko Promisification kehte hain.
 * 
 * 3. BENEFITS: Isse hum code ko clean rakh sakte hain aur "Callback Hell" 
 *    se bach sakte hain. Async/Await ka use bhi easy ho jata hai.
 * 
 * 4. KEYWORDS: .then() (Success par chalta hai) aur .catch() (Error par).
 * =========================================================================
 */
