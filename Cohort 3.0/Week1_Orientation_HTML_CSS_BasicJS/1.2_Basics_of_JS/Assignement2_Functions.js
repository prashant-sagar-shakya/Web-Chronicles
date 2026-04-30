/* 
    ================================================================
    ASSIGNMENT 2: THE CANVOTE FUNCTION
    ================================================================
    Task: Write a function called 'canVote' that returns true or false 
    based on if the age is greater than 18.
*/

/**
 * Checks if a person is eligible to vote.
 * @param {number} age - The age of the person.
 * @returns {boolean} - Returns true if age > 18, else false.
 */
function canVote(age) {
    // We use a comparison operator (>) which automatically returns true or false
    if (age > 18) {
        return true;
    } else {
        return false;
    }
}

// Testing the function
let user1Age = 25;
let user2Age = 15;

console.log("Can User 1 (25) vote? " + canVote(user1Age)); // Output: true
console.log("Can User 2 (15) vote? " + canVote(user2Age)); // Output: false

/* 
   PRO TIP: 
   You can write this function in just ONE line because (age > 18) 
   is already a true/false statement!
   
   function canVote(age) {
       return age > 18;
   }
*/