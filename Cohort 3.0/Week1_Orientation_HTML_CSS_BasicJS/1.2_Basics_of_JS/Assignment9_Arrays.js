/* 
    ================================================================
    ASSIGNMENT 9: ARRAY TRANSFORMATION (MAP)
    ================================================================
    Task: Take an array of numbers and return a new array where 
    every number is multiplied by 2.
*/

let numbers = [1, 2, 3, 4, 5];

/*
 * Multiplies every number in the array by 2.
 * @param {number[]} arr - The input list of numbers.
 * @returns {number[]} - A brand new list with doubled values.
 */
function doubleNumbers(arr) {
  // 1. We create a NEW empty array to store our results.
  // We don't want to change the original array (Best Practice).
  let result = [];

  // 2. We start a loop that runs from 0 to the end of the array.
  for (let i = 0; i < arr.length; i++) {
    // 3. We take the number at position 'i', multiply it by 2.
    let newValue = arr[i] * 2;

    // 4. We use .push() to add this new value to the END of our result array.
    result.push(newValue);
  }

  // 5. Once the loop is done, we send back the completed list.
  return result;
}

console.log("Doubled Array:", doubleNumbers(numbers)); // [2, 4, 6, 8, 10]

/* 
   PRO TIP: 
   In modern JavaScript, you don't need a loop for this! 
   You can use '.map()'. It does all the above steps automatically:
   
   let doubled = numbers.map(function(num) {
       return num * 2;
   });
*/
/*
   PRO TIP:
   You can use the '.map()' function to do this instantly:
   let doubled = numbers.map(n => n * 2);
*/
