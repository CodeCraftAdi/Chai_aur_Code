// Checking if a string is equal to another string:

let username = "chai";
let anotherUsername = "chai";

if (username == anotherUsername) {
    console.log("Pick another username"); //pick another username
} else {
  console.log("You can pick this username");
}

//Checking if a variable is a number or not:

let score = "44";

if (typeof score === "number") {
  console.log("Yep, this is a number"); // this will not run as score is a string
} else {
  console.log("No that is not a number"); // this will run
}
 
// Checking if an array is empty or not:

let items = ["item1"];

console.log(items.length); // 1

if (items.length === 0) {
  console.log("Array is empty");
} else {
  console.log("Array is NOT empty");
}

//----------------------------------------
/* == vs ===
   ==  : checks for value only (loose 
   comparison)
   === : checks for value and type both (strict comparison)
*/
let a = 5;
let b = "5";

console.log(a == b);  // ✅ true  → because "5" is converted to number 5
console.log(a === b); // ❌ false → number ≠ string

console.log(0 == false);   // true  → false becomes 0
console.log(0 === false);  // false → number vs boolean

console.log(null == undefined);  // true  → special case in JS
console.log(null === undefined); // false → different types

console.log(" " == 0);   // true   → " " (empty string) becomes 0
console.log(" " === 0);  // false  → string vs number

console.log(false == "0");  // true  → "0" → 0, false → 0
console.log(false === "0"); // false → boolean vs string
