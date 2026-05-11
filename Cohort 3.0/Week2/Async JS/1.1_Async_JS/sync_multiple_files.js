const fs = require("fs");

console.log("--- STARTING MULTIPLE SYNC READS ---");

// Record the start time
const startTime = Date.now();

// 1. Reading File A Synchronously
console.log("Reading a.txt...");
const dataA = fs.readFileSync("a.txt", "utf-8");
console.log("Finished reading a.txt.");
console.log("Content A:", dataA.trim());

console.log("-----------------------------------");

// 2. Reading File B Synchronously
console.log("Reading b.txt...");
const dataB = fs.readFileSync("b.txt", "utf-8");
console.log("Finished reading b.txt.");
console.log("Content B:", dataB.trim());

// Record the end time
const endTime = Date.now();

console.log("-----------------------------------");
console.log(`TOTAL TIME TAKEN: ${endTime - startTime}ms`);
console.log("In Synchronous mode, File B had to wait for File A to finish first.");

/**
 * =========================================================================
 * SUMMARY (Hinglish) 
 * =========================================================================
 * 1. MULTIPLE SYNC: Jab hum multiple files synchronously padhte hain, 
 *    toh wo ek queue ki tarah chalta hai.
 * 
 * 2. BLOCKING: File B tab tak start nahi hogi jab tak File A puri 
 *    tarah khatam nahi ho jati.
 * 
 * 3. TOTAL TIME: Saara time add ho jata hai (Time A + Time B). 
 *    Isse program slow ho sakta hai agar files badi hon.
 * =========================================================================
 */
