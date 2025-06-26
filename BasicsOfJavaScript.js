//logical operators
// Note : The logical operators contain two operators && and || 

// && is logical AND opertor for which both the operands should be true to return true
// || is logical OR operator for which at least one of the operands should be true to return true

a=true;
b=false;
console.log( a && b);  //falsse because b is false 

console.log( a || b);  //true because a is true

// Ternary operator
// the ternary operator is a shorthand for an if-else statement. 
// It takes three operands: a condition, a value if true, and a value if false.

let age=18;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote);  // "Yes, you can vote."

// Template literals
// Template literals are string literals that allow embedded expressions.
// They are enclosed by backticks (`) instead of single or double quotes.

let name = "John";
let greeting = `Hello, ${name}! Welcome to the JavaScript world.`;
console.log(greeting);  // "Hello, John! Welcome to the JavaScript world."

// shorthand for if object having same key and value 
let id=1;
let usernName="rohan";
let userEmail="rohandesh22@gmail.com";

//without shorthand
let userWithoutShortHand={
    id: id,
    usernName: usernName,
    userEmail: userEmail    
}

//with shorthand
let userWithShortHand={
    id,
    usernName,
    userEmail    
}

console.log(userWithoutShortHand);  // { id: 1, usernName: 'rohan', userEmail: 'rohandesh22@gmail.com'}

// Object destructuring
// Object destructuring is a syntax that allows you to extract properties
// from an object and assign them to variables.

let user={
    id: 1,
    usernName: "rohan",
    userEmail: "rohan22@gmail.com"
}

let { id: userId, usernName: uName, userEmail: email } = user;
console.log(userId);  // 1
console.log(uName);   // "rohan"
console.log(email);   // "rohan22@gmail.com"

// Array destructuring
// Array destructuring is a syntax that allows you to extract elements
// from an array and assign them to variables.

let numbers = [1, 2, 3, 4, 5];
let [first, second, ...rest] = numbers; 
console.log(first);  // 1
console.log(second); // 2   

// default parameters
// Default parameters allow you to initialize function parameters with default values 
// if no value or undefined is passed

function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet());          // "Hello, Guest!"
console.log(greet("Alice"));  // "Hello, Alice!"

// Spread operator
// The spread operator (...) allows an iterable (like an array) to be expanded in places
// where zero or more arguments or elements are expected. It is often used to
// create a shallow copy of an array or to merge arrays.

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log(combined);  // [1, 2, 3, 4, 5, 6]


// Rest operator
// The rest operator (...) allows you to represent an indefinite number of arguments as an array.
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3));        // 6
console.log(sum(1, 2, 3, 4, 5));  // 15

// es6 Array methods

//map method 
list = [1, 2, 3, 4, 5];
let doubled = list.map(num => num * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]

// filter method
let evenNumbers = list.filter(num => num % 2 === 0);
console.log(evenNumbers);  // [2, 4]        

// reduce method
let sumOfNumbers = list.reduce((acc, curr) => acc + curr, 0);
console.log(sumOfNumbers);  // 15   

// find method
let firstEven = list.find(num => num % 2 === 0);
console.log(firstEven);  //2
// if it is not present then it will return undefined

// findIndex method
let firstEvenIndex = list.findIndex(num => num % 2 === 0);
console.log(firstEvenIndex);  // 1
//if it is not present then it will return -1

// includes method
let hasThree = list.includes(3);
console.log(hasThree);  // true
// if it is not present then it will return false

// some method
let hasEven = list.some(num => num % 2 === 0);  
console.log(hasEven);  // true
// if it is not present then it will return false

// every method
let allEven = list.every(num => num % 2 === 0);
console.log(allEven);  // false
// if it is not present then it will return false

// sort method
let sortedList = list.sort((a, b) => a - b);
console.log(sortedList);  // [1, 2, 3, 4, 5]
// we are giving a callback function to sort the array in ascending order 
// if we want to sort in descending order then we can do it like this
let sortedListDesc = list.sort((a, b) => b - a);
console.log(sortedListDesc);  // [5, 4, 3, 2, 1]
// it is similar to comparator's compare method or compareTo method in java

// reverse method
let reversedList = list.reverse();
console.log(reversedList);  // [5, 4, 3, 2, 1]
// it reverses the array in place and returns the reversed array

// flat method
let nestedArray = [1, 2, [3, 4, [5, 6]]];
let flattenedArray = nestedArray.flat(2);  // 2 is the depth level  
console.log(flattenedArray);  // [1, 2, 3, 4, 5, 6] 
// it flattens the array to the specified depth level

// flatMap method
let flatMappedArray = nestedArray.flatMap(num => Array.isArray(num) ? num : [num]);
console.log(flatMappedArray);  // [1, 2, 3, 4, [5, 6]]
// it maps each element to an array and then flattens the result by one level
// it is similar to map method but it flattens the result by one level

// fetch API
// The fetch API is used to make network requests. It returns a Promise that resolves to the
// Response object representing the response to the request.
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));    
// Note: The fetch API is asynchronous and returns a Promise.   
// You can use async/await syntax to handle it more easily.

// async/await
// The async/await syntax is a way to work with Promises in a more synchronous manner
// It allows you to write asynchronous code that looks and behaves like synchronous code.

async function fetchData() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}   
fetchData();
// Note: The async/await syntax is only available in ES2017 and later versions of JavaScript.


// Arrow functions
// Arrow functions are a more concise syntax for writing function expressions.
const add = (a, b) => a + b;
console.log(add(2, 3));  // 5
// Arrow functions do not have their own 'this' context, which makes them useful for methods that
// need to preserve the context of 'this' from the surrounding code.
// They are also not suitable for methods that need to be used as constructors or for methods that
// need to access the 'arguments' object, as they do not have their own 'arguments' object.
// Note: Arrow functions are not hoisted, so they must be defined before they are used.
// They also cannot be used as constructors, so you cannot use the 'new' keyword with them.
// They also do not have their own 'this' context, so they cannot be used as methods in an object.
// They also do not have their own 'arguments' object, so you cannot use the 'arguments' keyword inside them.
// They also do not have their own 'super' keyword, so you cannot use the 'super' keyword inside them.
// They also do not have their own 'prototype' property, so you cannot use the 'prototype' property inside them.

//promise
// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation
// and its resulting value. It is a way to handle asynchronous operations in JavaScript.
let myPromise = new Promise((resolve, reject) => {
    let success = true; // Simulating success or failure
    if (success) {
        resolve("Operation was successful!");
    } else {
        reject("Operation failed.");
    }
});
myPromise
    .then(result => {
        console.log(result); // "Operation was successful!"
    })
    .catch(error => {
        console.error(error); // "Operation failed."
    });
// Note: Promises can be in one of three states: pending, fulfilled, or rejected.
// A Promise is created in the pending state, and it can transition to either the fulfilled or  
// rejected state based on the outcome of the asynchronous operation.
// You can chain multiple .then() methods to handle the result of a Promise, and you can use .catch()
// to handle any errors that occur during the execution of the Promise.
// Promises can also be used with async/await syntax for a more synchronous-like flow.