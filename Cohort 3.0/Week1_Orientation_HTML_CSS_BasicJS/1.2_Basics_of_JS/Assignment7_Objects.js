/* 
    ================================================================
    ASSIGNMENT 7: OBJECTS & VOTING
    ================================================================
    Task: Create a user object and check if they are legal to vote.
*/

let person = {
    name: "Rahul",
    age: 20
};

/**
 * Checks if the user is legal to vote (> 18).
 * @param {object} user 
 */
function checkVotingEligibility(user) {
    if (user.age > 18) {
        console.log(user.name + " is legal to vote.");
    } else {
        console.log(user.name + " is NOT legal to vote yet.");
    }
}

// Test
checkVotingEligibility(person); // Output: Rahul is legal to vote.

/* 
   KEY POINT:
   By passing an object, we can keep all user data (name, age, etc.) 
   together in one variable, making the code much cleaner.
*/