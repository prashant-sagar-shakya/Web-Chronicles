// Importing the "fs" (File System) module so we can read files from our computer
const fs = require("fs");

/**
 * I/O HEAVY OPERATIONS (Definition from Image)
 * 
 * I/O (Input/Output) heavy operations are tasks that involve 
 * transferring data between the program and external systems 
 * like your Hard Drive (Disk), the Internet (Network), or Databases.
 * 
 * These tasks take a lot of time compared to simple math calculations.
 */

// =========================================================================
// EXAMPLE 1: ASYNCHRONOUS (Non-Blocking) - The "Smart" way
// =========================================================================

console.log("--- ASYNC START ---");

// We save the current time in milliseconds to calculate duration later
const startTime = Date.now(); 

// fs.readFile is ASYNCHRONOUS. 
// It tells the computer: "Start reading this file, and let me know when you are done."
// It does NOT stop the rest of the code from running.
fs.readFile("example_file_for_Readfile.txt", "utf-8", (err, data) => {
    // This code inside the (err, data) => { ... } is called a CALLBACK.
    // It ONLY runs when the file is finished reading.
    const endTime = Date.now(); 
    
    if (err) {
        console.log("Error reading file");
    } else {
        // Printing how much time the background task actually took
        console.log(`[ASYNC CALLBACK] File read finished after ${endTime - startTime}ms`);
    }
});

// This line is outside fs.readFile. 
// Because fs.readFile is asynchronous, JavaScript skips over it and runs this line IMMEDIATELY.
const afterCallTime = Date.now();
console.log(`[IMMEDIATE] This line ran after only ${afterCallTime - startTime}ms!`);
console.log("Notice: JavaScript did NOT wait for the file. It moved to the next line.\n");


// =========================================================================
// EXAMPLE 2: SYNCHRONOUS (Blocking) - The "Waiting" way
// =========================================================================

// We use a timeout just to make the logs look clean in the console
setTimeout(() => {
    console.log("--- SYNC START ---");
    
    // Recording start time for the synchronous task
    const syncStart = Date.now();

    // fs.readFileSync is SYNCHRONOUS.
    // It tells the computer: "Read this file now, and DO NOT move to the next line until you finish."
    // This blocks everything else!
    const data = fs.readFileSync("example_file_for_Readfile.txt", "utf-8");
    
    // This line ONLY runs after the file is completely read
    const syncEnd = Date.now();

    console.log(`[SYNC DONE] File read finished after ${syncEnd - syncStart}ms`);
    
    // Now this line runs because the blocking is over
    const syncAfterTime = Date.now();
    console.log(`[DELAYED] This line ran after ${syncAfterTime - syncStart}ms because it HAD TO WAIT.`);
}, 2000); 

/**
 * =========================================================================
 * SUMMARY (Hinglish) 
 * =========================================================================
 * 1. I/O HEAVY: Wo tasks jo computer ke processor ke bahar hote hain, 
 *    jaise file read karna ya network call karna. Ye time lete hain.
 * 
 * 2. SYNC (Blocking): Code har line par rukta hai. Jab tak file read nahi 
 *    hogi, agli line nahi chalegi.
 * 
 * 3. ASYNC (Non-Blocking): Code file read start karke aage badh jata hai. 
 *    Jab file ready hoti hai, callback apne aap chal jata hai.
 * 
 * 4. PERFORMANCE: Async zyada fast feel hota hai kyunki CPU wait nahi 
 *    karta, wo doosre kaam karta rehta hai.
 * =========================================================================
 */
