const fs = require("fs");

/**
 * DEFINING YOUR OWN ASYNC FUNCTION
 * 
 * Task:
 * 1. Read a file
 * 2. Trim extra spaces
 * 3. Write it back to the file
 */

// --- 1. CALLBACK APPROACH ---
function cleanFile(filePath, cb) {
    // Read the file first
    fs.readFile(filePath, "utf-8", function (err, data) {
        if (err) {
            console.log("Error reading file:", err);
            return;
        }
        
        // Trim spaces
        const cleanedData = data.trim();
        
        // Write back to the file
        fs.writeFile(filePath, cleanedData, function (err) {
            if (err) {
                console.log("Error writing file:", err);
                return;
            }
            // Call the callback when done
            cb();
        });
    });
}

function onDone() {
    console.log("Callback Approach: File has been cleaned");
}

// usage
// cleanFile("a.txt", onDone);


// --- 2. PROMISIFIED APPROACH ---
function cleanFilePromisified(filePath) {
    return new Promise(function (resolve, reject) {
        // Read file
        fs.readFile(filePath, "utf-8", function (err, data) {
            if (err) {
                reject(err);
                return;
            }
            
            // Trim
            const cleanedData = data.trim();
            
            // Write file
            fs.writeFile(filePath, cleanedData, function (err) {
                if (err) {
                    reject(err);
                    return;
                }
                // Resolve the promise when writing is finished
                resolve();
            });
        });
    });
}

// Usage with Promise Chaining
/*
cleanFilePromisified("a.txt")
    .then(function() {
        console.log("Promisified Approach: File has been cleaned");
    })
    .catch(function(err) {
        console.log("Error:", err);
    });
*/

// Usage with Async/Await (The cleanest way)
async function main() {
    try {
        await cleanFilePromisified("a.txt");
        console.log("Async/Await Approach: File has been cleaned");
    } catch (err) {
        console.log("Something went wrong:", err);
    }
}

main();


/**
 * --- HINGLISH SUMMARY ---
 * 
 * Humne kya kiya?
 * Humein ek file ko saaf (trim) karna tha. Iske do tareeke dekhe:
 * 
 * 1. Callback Approach: 
 * Isme humne ek function pass kiya (`onDone`) jo kaam hone ke baad call hota hai. 
 * Isme nesting jyada hoti hai (Callback Hell ka khatra).
 * 
 * 2. Promisified Approach:
 * Isme humne logic ko ek Promise ke andar wrap kar diya. 
 * Isse hum `.then()` ya `async/await` use kar sakte hain, jo code ko 
 * clean banata hai.
 * 
 * `main()` function mein humne `await` use kiya hai taaki code linear dikhe.
 */
