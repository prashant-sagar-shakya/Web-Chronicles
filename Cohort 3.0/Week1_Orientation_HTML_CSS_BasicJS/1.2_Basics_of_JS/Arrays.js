/* 
    ================================================================
    JAVASCRIPT ARRAYS: LIST OF ITEMS
    ================================================================
    An Array is like a "Shopping List". It stores many values in one 
    single variable, ordered by a number (index).
*/

// [1] Creating an Array
let colors = ["Red", "Green", "Blue", "Yellow"];

// [2] Accessing items
// IMPORTANT: Counting starts at 0!
console.log("First Color: " + colors[0]); // Red
console.log("Third Color: " + colors[2]); // Blue

// [3] Array Length
console.log("Total colors: " + colors.length); // 4

// [4] Modifying items
colors[1] = "Orange"; // Changes "Green" to "Orange"
console.log("Updated colors: " + colors);

// [5] Adding items
colors.push("Purple"); // Adds to the end
console.log("After push: " + colors);

/* 
   SUMMARY:
   - Arrays are zero-indexed (0, 1, 2...).
   - Use 'arr.length' to see how many items are inside.
   - Use '.push()' to add a new item at the end.
*/