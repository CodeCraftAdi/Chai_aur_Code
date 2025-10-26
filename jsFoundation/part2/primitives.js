// There are 7 primitive data types:
// Number
// String
// Boolean
// Undefined
// Null
// Symbol
// BigInt
 
// 1. Number
let balance = 120;
let anotherBalance = new Number(120);// not recommended //wrapper object

console.log(balance);
console.log(anotherBalance.valueOf());

console.log(typeof balance); // 'number'
console.log(typeof anotherBalance); // 'object'

console.log(balance == anotherBalance);  // ✅ true  (loose comparison)
console.log(balance === anotherBalance); // ❌ false (strict comparison)

// ------------------------------------

//2. boolean
let isActive = true; 
let isReallyActive = new Boolean(true); // not recommended

// ------------------------------------

//3. null and undefined
let firstname = null;
let lastname = undefined;
console.log(firstname); // null
console.log(lastname);// undefined

let temp = null;
console.log(typeof temp); // object this is a bug in javascript 

// ------------------------------------

//4. string
let myString = "hello";
let myStringOne = "Hola";
let username = "hitesh";

let oldGreet = myString + " " + "hitesh";
// console.log(oldGreet);

let greetMessage = `Hello ${username} !`;
let demoOne = `Value is ${2 * 2}`;
console.log(demoOne);   // Value is 4
console.log(greetMessage); // Hello hitesh !

// ------------------------------------

// 5. Symbol
let sm1 = Symbol("hitesh");
let sm2 = Symbol("hitesh");
// unidue and immutable
console.log(sm1 == sm2); // false
console.log(sm1 === sm2); // false

 
