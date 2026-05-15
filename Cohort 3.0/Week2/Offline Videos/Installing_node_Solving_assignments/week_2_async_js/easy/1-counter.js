/*
  Task: Create a counter in JavaScript that goes up every second.
  Approach: We use the built-in setInterval function to execute a piece of code every 1000ms.
*/

let count = 0;

function startCounter() {
  setInterval(() => {
    count++;
    // Clear console and show updated count
    console.clear();
    console.log(`Counter: ${count}`);
  }, 1000);
}

// startCounter(); // Uncomment to run locally
