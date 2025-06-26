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

