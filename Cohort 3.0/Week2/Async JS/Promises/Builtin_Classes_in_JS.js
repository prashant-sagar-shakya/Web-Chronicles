// Date Class in JavaScript
// The Date class is a built-in object that allows you to work with dates and times.

// 1. Current Date and Time
const now = new Date();
console.log("Full Date Object:", now);

// 2. Getting specific parts of the date class
const date = now.getDate();       // Day of the month (1-31)
const month = now.getMonth();     // Month (0-11) -> 0 is Jan, 11 is Dec
const year = now.getFullYear();   // Full year (e.g., 2024)
const day = now.getDay();         // Day of the week (0-6) -> 0 is Sunday

console.log(`Today's Date: ${date}`);
console.log(`Current Month: ${month + 1}`); // Adding 1 to make it human-readable (1-12)
console.log(`Current Year: ${year}`);
console.log(`Day of the week: ${day}`);

// 3. Getting time details
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());

console.log("-----------------------------------");

// 4. Regular Object
// Objects are the most common way to store keyed data.
const user = {
  name: "Prashant",
  age: 25,
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

console.log("Object Name:", user.name); // Accessing using dot notation
console.log("Object Age:", user['age']); // Accessing using bracket notation
user.greet();

console.log("-----------------------------------");

// 5. Map Class
// Map is a collection of keyed data items, similar to an Object. 
// But unlike Objects, Map allows keys of any type (even objects or functions).

const map = new Map();
map.set('name', 'Prashant');
map.set('age', 25);

// Getting values from Map
const firstName = map.get('name');
console.log("First Name from Map:", firstName);
console.log("Age from Map:", map.get('age'));

// Summary in Hinglish:
/*
1. Date Object Kaise Banayein:
   - `new Date()` ka use karke hum current date aur time ka object bana sakte hain.

2. Important Methods (Date):
   - `getDate()`: Mahine ki tareekh (1-31).
   - `getMonth()`: Mahina (0-11). Real month ke liye `+ 1` karein.
   - `getFullYear()`: Poora saal (Year).
   - `getDay()`: Hafte ka din (0 = Sunday).

3. Regular Objects:
   - Objects key-value pairs store karne ka sabse common tarika hai.
   - Inhe hum `{}` (curly braces) se banate hain.
   - Data access karne ke liye `.` (dot notation) ya `[]` (bracket notation) use karte hain.

4. Map Class:
   - `Map` bhi key-value pairs store karta hai, par yeh regular objects se thoda advance hai kyunki ismein keys kisi bhi type ki ho sakti hain (string, number, ya object bhi).
   - `map.set()` se data dalte hain aur `map.get()` se nikalte hain.
*/
