/* 
    ================================================================
    JAVASCRIPT LOGIC: IF-ELSE STATEMENTS
    ================================================================
    If-Else statements help your code make "Decisions".
    It's like a path in a forest: 
    - "IF" the path is clear, walk. 
    - "ELSE", find another way.
*/

let time = 14; // Suppose it is 14:00 (2 PM)

// [1] BASIC IF-ELSE
if (time < 12) {
    console.log("Good Morning!");
} else {
    console.log("Good Afternoon!");
}

// [2] IF - ELSE IF - ELSE (For more than 2 choices)
let age = 21;

if (age < 13) {
    console.log("You are a Child.");
} else if (age >= 13 && age < 20) {
    console.log("You are a Teenager.");
} else {
    console.log("You are an Adult.");
}

/* 
   EXPLANATION of the Symbols:
   && : Means "AND". Both sides must be true.
   || : Means "OR". Only one side needs to be true.
   >= : Greater than or equal to.
   <= : Less than or equal to.
*/

// [3] NESTED IF (An IF inside an IF)
let isRainy = true;
let haveUmbrella = false;

if (isRainy) {
    console.log("It is raining outside.");
    
    if (haveUmbrella) {
        console.log("You can go out with your umbrella!");
    } else {
        console.log("Stay inside, you don't have an umbrella.");
    }
} else {
    console.log("It's a sunny day! Go play!");
}
