// Arrays and Methods
// Utilise the inbuilt methods of arrays in Javascript to solve the below tasks:



// Task 1: Array Filtering

// Write a function filterNumbers(arr) that returns only numbers from a mixed array



// Task 2: Array Reversal

// Write a function reverseArray(arr) that reverses the array



// Task 3: Find Maximum in an Array

// Write a function findMax(arr) that returns the largest number in the array



// Task 4: Remove Duplicates from an Array

// Write a function removeDuplicates(arr) that returns a new array with all duplicates removed



// Task 5: Flatten a Nested Array

// Write a function flattenArray(arr) that takes a nested array and returns a single flattened array

function filterNumbers(arr) {
    return arr.filter(num => typeof num === "number");
}

function reverseArray(arr) {
    return arr.reverse();
}

function findMax(arr) {
    //   return Math.max(...arr);
    return arr.reduce((a, b) => a > b ? a : b);
    //  return arr.reduce((a, b) => Math.max(a, b), -Infinity);
}

function removeDuplicates(arr) {
    //   let s = new Set(arr);
    //   return [...s];

    let temp = [];
    arr.forEach(element => {
        if (!temp.includes(element)) {
            temp.push(element);
        }
    }
    )
    return temp;

}

function flattenArray(arr) {
    return arr.flat(Infinity);
}
