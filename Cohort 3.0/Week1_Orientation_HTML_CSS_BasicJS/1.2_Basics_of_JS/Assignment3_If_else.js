/* 
    ================================================================
    ASSIGNMENT 3: MAX OF THREE NUMBERS
    ================================================================
    Task: Write a function that takes three numbers and returns the largest.
*/

/**
 * Finds the maximum of three numbers.
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * @returns {number} - The largest number.
 */
function findMax(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

// Testing the function
console.log("Max of 10, 20, 15 is: " + findMax(10, 20, 15)); // 20
console.log("Max of 5, 5, 2 is: " + findMax(5, 5, 2));     // 5
console.log("Max of -1, -5, 0 is: " + findMax(-1, -5, 0));   // 0

/* 
   EXPLANATION:
   We use "Logical AND" (&&) to check two conditions at once.
   - "If A is bigger than B AND A is bigger than C, then A is the max."
   - We do the same for B.
   - If neither A nor B is the biggest, then C must be the biggest.
*/