/* 
    ================================================================
    ARRAY OF OBJECTS: DATA IN BULK
    ================================================================
    This is how real-world data looks (like a list of users in a database).
    It is an Array where every item is an Object.
*/

let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 }
];

// [1] Accessing data
// First, pick the index of the array, then the property of the object.
console.log("First user's name: " + users[0].name); // Alice
console.log("Second user's age: " + users[1].age);   // 17

/* 
   EXPLANATION:
   Think of this as a list of "Identity Cards". 
   - users[0] gives you the first card.
   - .name looks at the name written on that card.
*/
