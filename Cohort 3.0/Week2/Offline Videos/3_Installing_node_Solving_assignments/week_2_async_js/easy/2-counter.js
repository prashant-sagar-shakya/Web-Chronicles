/*
  Task: Create a counter in JavaScript without using setInterval.
  Approach: We use recursive setTimeout calls to achieve a similar effect to setInterval.
*/

let count = 0;

function startCounter() {
  count++;
  console.clear();
  console.log(`Counter: ${count}`);

  // Schedule the next increment after 1 second
  setTimeout(startCounter, 1000);
}

// startCounter(); // Uncomment to run locally
