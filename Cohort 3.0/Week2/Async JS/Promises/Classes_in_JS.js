// Primitive Types
// Number, String, Boolean, Null, Undefined, BigInt, Symbol

let a = 10;
let b = "10";

console.log(a == b); // true
console.log(a === b); // false

// Complex Types
// Objects, Arrays, Functions

// Every object is an instance of Object
let obj = {};
console.log(obj instanceof Object); // true

// Every array is an instance of Array
let arr = [];
console.log(arr instanceof Array); // true

// Every function is an instance of Function
let func = function () {};
console.log(func instanceof Function); // true

// Classes -> In javascript classes are way to define blueprints for creating objects. (These objects are different from objects defined in last session)

class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  getDetails() {
    console.log(
      `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`,
    );
  }
}

let car1 = new Car("Toyota", "Camry", 2022);
let car2 = new Car("Honda", "Civic", 2023);

car1.getDetails();
car2.getDetails();

// Inheritance -> In classes we can inherit properties and methods from one class to another class. (Extends keyword is used for inheritance)

class ElectricCar extends Car {
  constructor(brand, model, year, batterySize) {
    super(brand, model, year); // Calls the constructor of the parent class.
    this.batterySize = batterySize;
  }

  charge() {
    console.log(
      `Charging the ${this.brand} ${this.model} with ${this.batterySize} battery...`,
    );
  }
}

let electricCar1 = new ElectricCar("Tesla", "Model S", 2022, "100 kWh");
electricCar1.charge();
electricCar1.getDetails();

// Key concepts
// Class Declaration -> defined using class keyword and ends with curly braces
// Constructor -> special method that is called when object of class is created.
// super() -> used to call the constructor of the parent class.
// extends -> used to inherit properties and methods from one class to another class.
// static -> used to define static properties and methods. These methods are called on the class itself, not on instances of the class.
// this -> used to refer to the current instance of the class.
// Getters and Setters -> used to get and set the values of the properties of the class.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

class Student extends Person {
  constructor(name, age, rollNo) {
    super(name, age);
    this.rollNo = rollNo;
  }

  getDetails() {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Roll No: ${this.rollNo}`,
    );
  }
}

let student1 = new Student("John", 20, "123");
student1.getDetails();

// Static method -> method that is called on the class itself, not on instances of the class.

class Calculator {
  static add(a, b) {
    return a + b;
  }
}

console.log(Calculator.add(10, 20));

// Destructors in JS? 
// JavaScript is a garbage-collected language, so it doesn't have a formal "destructor" keyword like C++. 
// However, we can implement a manual cleanup method or use FinalizationRegistry for advanced cases.

class DatabaseConnection {
  constructor(dbName) {
    this.dbName = dbName;
    console.log(`Connected to ${this.dbName}`);
  }

  // Manual cleanup method (Often called destroy or close)
  destroy() {
    console.log(`Connection to ${this.dbName} closed and resources released.`);
    this.dbName = null;
  }
}

const myDb = new DatabaseConnection("UsersDB");
// Logic...
myDb.destroy(); // Manually "destructing" or cleaning up resources.

myDb.destroy(); // Manually "destructing" or cleaning up resources.

// Summary in Hinglish:
/*
1. Primitive vs Complex Types: 
   - JS mein do tarah ke data types hote hain: Primitive (Number, String, Boolean, etc.) aur Complex (Objects, Arrays, Functions).
   - `==` sirf value check karta hai, jabki `===` value aur type dono check karta hai.
   - `instanceof` operator se hum check kar sakte hain ki koi object kis type (Object, Array, Function) ka instance hai.

2. Classes in JS:
   - Classes objects banane ke liye ek 'blueprint' (dhancha) hoti hain.
   - `class` keyword ka use karke class define ki jati hai.
   - `constructor()` ek special method hai jo tab chalta hai jab hum `new` keyword se koi naya object banate hain. Iska kaam properties ko initialize karna hota hai.

3. Inheritance (Virasat):
   - `extends` keyword ka use karke ek class doosri class ki properties aur methods ko copy (inherit) kar sakti hai.
   - `super()` ka use parent class ke constructor ko call karne ke liye kiya jata hai. Iske bina child class mein properties initialize nahi ho payengi agar parent class ka constructor hai.

4. Static Methods:
   - `static` keyword se jo methods bante hain, wo class ke 'instances' (objects) par nahi, balki seedha class ke naam par call hote hain (e.g., `Calculator.add()`).

5. 'this' Keyword:
   - `this` hamesha 'current object' ko refer karta hai jispar kaam ho raha hai.

6. Getters and Setters:
   - Inka use class ki properties ki values ko secure tarike se read aur update karne ke liye hota hai.

7. Destructors (Cleanup):
   - JS mein C++ ki tarah automatic `destructor` nahi hota kyunki JS 'Garbage Collected' language hai.
   - Manual cleanup ke liye hum `destroy()` method banate hain.
*/
