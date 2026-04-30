/* 
    ================================================================
    JAVASCRIPT OBJECTS: KEY-VALUE PAIRS
    ================================================================
    An Object is like a "Real Life Entity" (e.g., a Person, a Car).
    It stores data as "Properties" (Key: Value).
*/

// [1] Creating a basic object
let user = {
    firstName: "Harkirat", // Key: "firstName", Value: "Harkirat"
    lastName: "Singh",
    age: 21,
    isInstructor: true
};

// [2] How to access data inside an object
console.log("First Name: " + user.firstName); // Using Dot notation
console.log("Age: " + user["age"]);           // Using Bracket notation

// [3] Objects can contain other data types (even other objects!)
let classroom = {
    name: "Web Dev 101",
    teacher: user, // An object inside an object!
    studentsCount: 5000
};

console.log("Teacher's Last Name: " + classroom.teacher.lastName);

/* 
   SUMMARY:
   - Objects help us group related data together.
   - Keys are unique names (like a label).
   - Values can be anything: String, Number, Boolean, or even another Object.
*/
