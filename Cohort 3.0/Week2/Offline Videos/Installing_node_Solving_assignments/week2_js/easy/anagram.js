/*
  Approach:
  1. An anagram is a word or phrase formed by rearranging the letters of a different word or phrase.
  2. To check if two strings are anagrams, we need to compare their character counts.
  3. A simple way to do this is to sort both strings and check if they are identical.
  4. We must handle case-insensitivity by converting both strings to lowercase.
*/

function isAnagram(str1, str2) {
  // Step 1: Normalize both strings to lowercase so the comparison is case-insensitive
  const cleanStr1 = str1.toLowerCase();
  const cleanStr2 = str2.toLowerCase();

  // Step 2: If lengths are different, they cannot be anagrams
  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  // Step 3: Split strings into arrays of characters, sort them, and join them back
  // This puts characters in a predictable order (e.g., "silent" -> "eilnst")
  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');

  // Step 4: Compare the sorted versions. If they match, the strings are anagrams.
  return sortedStr1 === sortedStr2;
}

// Export the function so it can be used in test files
module.exports = isAnagram;
