/* 
    ================================================================
    ASSIGNMENT 5: OBJECTS & GREETINGS
    ================================================================
    Task: Create a user object and write a function to greet them.
    Also use string concatenation to build the message.
*/

// The User Object
let user = {
    name: "Aman",
    gender: "male",
    title: "Mr."
};

/**
 * Greets a user based on their object data.
 * @param {object} person 
 */
function greet(person) {
    // String concatenation using '+'
    let greetingMessage = "Hello " + person.title + " " + person.name + ", welcome to our site!";
    console.log(greetingMessage);
}

// Calling the function
greet(user); // Output: Hello Mr. Aman, welcome to our site!

/* 
   EXPLANATION:
   1. We created an object called 'user' with some properties.
   2. We passed that entire object into the 'greet' function.
   3. Inside the function, we extracted the name and title to build a long string.
*/