/* 
    ================================================================
    JAVASCRIPT LOOPS: DOING THINGS REPEATEDLY
    ================================================================
    Loops help us run the same code multiple times without 
    typing it over and over.
*/

// [1] The FOR Loop
// Syntax: (start; condition; increment)
console.log("Counting from 0 to 4 using FOR loop:");
for (let i = 0; i < 5; i++) {
    console.log("Number: " + i);
}

// [2] The WHILE Loop
// It keeps running AS LONG AS the condition is true.
let count = 0;
console.log("Counting from 0 to 4 using WHILE loop:");
while (count < 5) {
    console.log("Count: " + count);
    count++; // Very important! Or the loop will never stop.
}

/* 
   REAL WORLD USE:
   Loops are most commonly used to go through items in an Array.
*/
let fruits = ["Apple", "Mango", "Kiwi"];
for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit " + i + ": " + fruits[i]);
}
