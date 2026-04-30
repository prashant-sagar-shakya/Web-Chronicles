/* 
    ================================================================
    ASSIGNMENT 8: FILTERING ARRAYS
    ================================================================
    Task: Take an array of objects and return only the users 
    who are Males AND older than 18.
*/

let allUsers = [
    { name: "Aman", age: 21, gender: "male" },
    { name: "Priya", age: 25, gender: "female" },
    { name: "Rahul", age: 17, gender: "male" },
    { name: "Karan", age: 30, gender: "male" }
];

/**
 * Filters users based on gender and age.
 * @param {object[]} users 
 * @returns {object[]} - The filtered list.
 */
function getLegalMales(users) {
    let filteredList = []; // [1] Initialize a new empty array

    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        
        // Check both conditions: male AND age > 18
        if (user.gender === "male" && user.age > 18) {
            filteredList.push(user); // [2] Push to the new array
        }
    }

    return filteredList;
}

// Test the function
let result = getLegalMales(allUsers);
console.log("Legal Males:", result);

/* 
   PRO TIP: 
   In modern JS, you can do this in ONE line using the '.filter()' function:
   
   let result = allUsers.filter(u => u.gender === "male" && u.age > 18);
*/