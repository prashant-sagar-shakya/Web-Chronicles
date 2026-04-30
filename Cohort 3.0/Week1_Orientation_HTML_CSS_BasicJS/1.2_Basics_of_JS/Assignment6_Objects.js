/* 
    ================================================================
    ASSIGNMENT 6: OBJECTS MASTERCLASS
    ================================================================
    Task: Create a nested object structure and access it.
*/

let complexUser = {
    name: "Karan",
    age: 22,
    address: {
        city: "Delhi",
        pincode: 110001,
        country: "India"
    },
    hobbies: ["Reading", "Coding", "Gaming"]
};

// Accessing nested data
console.log("User City: " + complexUser.address.city);
console.log("First Hobby: " + complexUser.hobbies[0]);

/* 
   SUMMARY:
   - Objects can contain other objects (address).
   - Objects can contain arrays (hobbies).
   - This allows us to model complex data like real-life profiles.
*/
