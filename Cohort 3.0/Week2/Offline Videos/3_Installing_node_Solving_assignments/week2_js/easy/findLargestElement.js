/*
  Approach:
  1. To find the largest element in an array, we can initialize a variable with the first element of the array.
  2. Iterate through the rest of the array and compare each element with our current "largest".
  3. If we find an element larger than our current largest, update it.
  4. If the array is empty, return undefined (as per tests).
*/

function findLargestElement(numbers) {
  // If the array is empty, return undefined
  if (numbers.length === 0) {
    return undefined;
  }

  // Initialize largest with the first element of the array
  let largest = numbers[0];

  // Loop through the array starting from the second element
  for (let i = 1; i < numbers.length; i++) {
    // If current element is greater than our 'largest', update 'largest'
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }

  // Return the final largest value found
  return largest;
}

// Export the function for test files
module.exports = findLargestElement;
