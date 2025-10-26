// 1. Object
const username = {
  "first name": "hitesh",
  isLoggedin: true,
};

username.firstname = "Mr. H";
username.lastname = "choudhary"; //adding new key-value pair

// accessintg values from object
console.log(username["first name"]);// Mr. H
console.log(username.lastname);// choudhary
console.log(username);// { 'first name': 'Mr. H', isLoggedin: true, lastname: 'choudhary' }
console.log(typeof username);// object

let today = new Date();
console.log(today.getDate());// current date
f
// -----------------------------------------------

// Array
let anotherUser = ["hitesh", true];
console.log(anotherUser[0]); // hitesh

let hasValue = "2abc";
console.log(typeof Number(hasValue));// number
console.log(Number(null));

// -----------------------------------------------
// IMPORTANT

// type conversion
console.log("1" + 2); // "12"
console.log(typeof ("1" + 2)); // string

console.log("1" - 2); // -1
console.log(typeof ("1" - 2)); // number
 
console.log("5" + null); // "5null"
console.log(typeof ("5" + null)); // string

console.log("5" - null); // 5
console.log(typeof ("5" - null)); // number

console.log("5" + undefined); // "5undefined"
console.log(typeof ("5" + undefined)); // string

console.log("5" - undefined); // NaN
console.log(typeof ("5" - undefined)); // number

let isValue = true;// true is treated as 1
console.log(isValue + 2); // 3
console.log(typeof (isValue + 2)); // number
  
let isValueOne = false; // false is treated as 0
console.log(isValueOne + 2); // 2
console.log(typeof (isValueOne + 2)); // number

// NaN (Not a Number)
// 1.
// a. Invalid mathematical operation results in NaN
console.log(+"hello"); // NaN
console.log(typeof (+"hello")); // number
console.log(0 / 0);       // NaN
console.log(Math.sqrt(-1)); // NaN

//b. Converting non - numeric strings to numbers:
console.log(Number("Hello")); // NaN
console.log(parseInt("abc")); // NaN

//c. Math with undefined or non-number values:
console.log(undefined + 5); // NaN
console.log("abc" * 2);     // NaN

// 2. NaN is the only value in JavaScript that is treated as unequal to itself
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

// 3. To check if a value is NaN, use the isNaN() function
console.log(isNaN(NaN)); // true
console.log(isNaN(5)); // false
console.log(isNaN("hello")); // true
console.log(isNaN("123")); // false
// -----------------------------------------------