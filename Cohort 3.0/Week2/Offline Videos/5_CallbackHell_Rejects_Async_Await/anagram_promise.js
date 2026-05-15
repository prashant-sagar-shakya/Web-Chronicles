/**
 * SOLVING ANAGRAM PROBLEM USING PROMISE CHAINING
 * 
 * Anagram: A word formed by rearranging the letters of another word.
 * Example: "listen" and "silent" are anagrams.
 */

// --- THE ANAGRAM LOGIC (PROMISIFIED) ---
function checkAnagram(str1, str2) {
    return new Promise(function (resolve, reject) {
        // Step 1: Basic validation
        if (typeof str1 !== "string" || typeof str2 !== "string") {
            reject("Invalid Input: Both arguments must be strings.");
            return;
        }

        // Step 2: Clean the strings (lowercase and remove spaces)
        const cleanStr1 = str1.toLowerCase().replace(/\s/g, "");
        const cleanStr2 = str2.toLowerCase().replace(/\s/g, "");

        // Step 3: Check length
        if (cleanStr1.length !== cleanStr2.length) {
            resolve(false); // Not an anagram
            return;
        }

        // Step 4: Sort and compare
        const sorted1 = cleanStr1.split("").sort().join("");
        const sorted2 = cleanStr2.split("").sort().join("");

        if (sorted1 === sorted2) {
            resolve(true); // It is an anagram!
        } else {
            resolve(false); // Not an anagram
        }
    });
}

// --- PROMISE CHAINING EXAMPLE ---
// We check multiple pairs one by one using a chain.

console.log("Starting Anagram Checks...");

checkAnagram("listen", "silent")
    .then(function (result) {
        console.log("Check 1 ('listen', 'silent'):", result);
        // Move to the next check
        return checkAnagram("hello", "world");
    })
    .then(function (result) {
        console.log("Check 2 ('hello', 'world'):", result);
        // Move to the next check
        return checkAnagram("rail safety", "fairy tales");
    })
    .then(function (result) {
        console.log("Check 3 ('rail safety', 'fairy tales'):", result);
    })
    .catch(function (error) {
        // This catches any errors (like if we pass a number instead of a string)
        console.log("Error caught in chain:", error);
    });


/**
 * --- HINGLISH SUMMARY ---
 * 
 * Humne Anagram problem ko Promise ke saath kaise solve kiya?
 * 1. Sabse pehle ek function banaya jo Promise return karta hai.
 * 2. Logic same hai: strings ko clean karo, sort karo, aur compare karo.
 * 3. `resolve(true)` tab kiya jab anagram mil gaya, aur `resolve(false)` tab jab nahi mila.
 * 
 * Promise Chaining ka use:
 * Humne `.then()` ka use karke ek ke baad ek check kiya. 
 * Pehla check khatam hone par `return checkAnagram(...)` kiya taaki chain chalti rahe.
 * Isse code nested nahi hota aur hum line by line kai saare strings check kar sakte hain.
 */
