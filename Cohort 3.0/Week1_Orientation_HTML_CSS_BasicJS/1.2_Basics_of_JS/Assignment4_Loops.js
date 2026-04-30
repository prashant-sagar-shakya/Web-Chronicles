/* 
    ================================================================
    ASSIGNMENT 4: BINARY SEARCH OVER STRINGS
    ================================================================
    Task: Find a specific string in a SORTED array of strings.
    Binary Search is a very fast way to find items in a sorted list.
*/

/**
 * Performs Binary Search on a sorted array of strings.
 * @param {string[]} arr - The sorted array.
 * @param {string} target - The string to find.
 * @returns {number} - The index of the target, or -1 if not found.
 */
function binarySearchStrings(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let current = arr[mid];

        if (current === target) {
            return mid; // Found it!
        } else if (current < target) {
            low = mid + 1; // Look in the right half
        } else {
            high = mid - 1; // Look in the left half
        }
    }

    return -1; // Not found
}

// Important: The array MUST be sorted alphabetically.
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

console.log("Index of 'cherry': " + binarySearchStrings(fruits, "cherry")); // 2
console.log("Index of 'grapes': " + binarySearchStrings(fruits, "grapes")); // -1

/* 
   EXPLANATION:
   Binary Search works like looking for a word in a real dictionary:
   1. Open the dictionary in the middle.
   2. If your word is alphabetically "greater" than the middle word, 
      throw away the left half and look in the right half.
   3. Repeat until you find the word or run out of pages.
   
   Note: In JS, "a" < "b" is true, so we can use < and > for strings!
*/