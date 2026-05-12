const fs = require('fs');

/**
 * Task: 
 * 1. Write manual Promisified versions of fs.readFile and fs.writeFile.
 * 2. Write a function to read, trim, and write back to a file.
 */

// --- 1. Manual Promisified version of fs.readFile ---
function readFilePromisified(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err); // If error, reject the promise
      } else {
        resolve(data); // If success, resolve with file data
      }
    });
  });
}

// --- 2. Manual Promisified version of fs.writeFile ---
function writeFilePromisified(filePath, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve("File written successfully!");
      }
    });
  });
}

// --- 3. Clean File Function (Async/Await) ---
async function cleanFile(filePath) {
  try {
    console.log("Reading file...");
    const content = await readFilePromisified(filePath);

    console.log("Trimming extra spaces...");
    const trimmedContent = content.trim();

    console.log("Writing back...");
    await writeFilePromisified(filePath, trimmedContent);

    console.log("Success! File is now clean.");
  } catch (error) {
    console.error("Operation failed:", error);
  }
}

// --- Testing the manual promisified functions ---
const fileName = 'test_manual.txt';

// Step 1: Create a dirty file with spaces
fs.writeFile(fileName, "   Dirty data with spaces   ", (err) => {
  if (err) return console.log(err);
  console.log("Dirty file created.");

  // Step 2: Use our async clean function
  cleanFile(fileName).then(() => {
    // Step 3: Verify the result
    return readFilePromisified(fileName);
  }).then((data) => {
    console.log("Verified Content: '" + data + "'");
  });
});

// Summary in Hinglish:
/*
1. Manual Promisification: 
   - `fs.readFile` aur `fs.writeFile` callbacks use karte hain.
   - Humne inke upar ek `new Promise` ka wrapper banaya hai.
   - `resolve()` tab call hota hai jab `err` null ho, aur `reject()` tab jab koi error aaye.

2. Benefits: 
   - Ab hum in functions ko `.then()` ya `await` ke saath use kar sakte hain, jisse "Callback Hell" se bacha ja sakta hai.

3. cleanFile: 
   - Yeh function pehle `readFilePromisified` ko "await" karta hai, fir data ko `.trim()` karta hai, aur fir `writeFilePromisified` ko "await" karta hai.
*/
