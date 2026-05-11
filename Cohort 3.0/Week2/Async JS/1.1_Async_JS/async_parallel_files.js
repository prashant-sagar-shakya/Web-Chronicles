const fs = require("fs");

console.log("--- STARTING PARALLEL ASYNC READS ---");

const startTime = Date.now();

// 1. Start reading File A (Asynchronous)
console.log("Starting to read a.txt...");
fs.readFile("a.txt", "utf-8", (err, data) => {
    const endTime = Date.now();
    console.log(`\n[CALLBACK A] Finished a.txt after ${endTime - startTime}ms`);
    console.log("Content A:", data.trim());
});

// 2. Start reading File B (Asynchronous)
// Notice: We don't wait for A to finish. We start B immediately!
console.log("Starting to read b.txt...");
fs.readFile("b.txt", "utf-8", (err, data) => {
    const endTime = Date.now();
    console.log(`\n[CALLBACK B] Finished b.txt after ${endTime - startTime}ms`);
    console.log("Content B:", data.trim());
});

// 3. This line runs while the files are still being read in the background
const afterCallsTime = Date.now();
console.log(`\n[IMMEDIATE] Both read requests sent in ${afterCallsTime - startTime}ms!`);
console.log("JS is now free to do other work while the files are being read.");

/**
 * =========================================================================
 * SUMMARY (Hinglish) 
 * =========================================================================
 * 1. PARALLEL ASYNC: Humne File A aur File B dono ko ek saath read karne 
 *    ke liye bhej diya.
 * 
 * 2. NO WAITING: File B ne File A ke khatam hone ka wait nahi kiya.
 * 
 * 3. CALLBACK ORDER: Kaunsi file pehle read hogi, ye computer par depend 
 *    karta hai. Jo pehle ready hogi, uska callback pehle chalega.
 * 
 * 4. EFFICIENCY: Is tareeke se hum kam time me zyada kaam kar sakte hain.
 * =========================================================================
 */
