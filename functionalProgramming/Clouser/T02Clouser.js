// So what is the closure:
// A closure is a function having access to the parent scope, even after the parent function has closed.
// A closure is a function that retains access to its parent scope, even after the parent function has finished executing.

// There are 2 parst of above defination

// A closure is a function having access to the parent scope,
// This above part is lexical scope

// even after the parent function has closed.
// This above part is the key point of closure

// Further explanation

// A closure is created when we define a function, not when a function is executed

// Let modify the above example

// Example 1: Basic Closure

console.log("--------------------- Basic Closure ---------------------");

// global
var x = 2;

function outerFunction() {
  let y = 3;
  console.log("in outerFunction");
  console.log("global x ===> ", x);
  console.log("y ===> ", y);

  function innerFunction() {
    y = y + 2;
    console.log("in innerFunction");
    console.log("y ===> ", y);
    x = x + 2;
    console.log("global x ===> ", x);

    // The child function has access to the values of its parent function and the global scope
    // This is lexical scope
  }
  //   Instead of Call of child function in the parent function just return
  return innerFunction;
}

const fn = outerFunction();
// Output:
// in outerFunction
// lobal x ===>  2
// y ===>  3
console.log("------Callinf fn------");
fn();
// Output:
// ------Callinf fn------
// in innerFunction
// y ===>  5
// global x ===>  4
console.log("------Callinf fn again------");
fn();
// output:
// ------Callinf fn again------
// in innerFunction
// y ===>  7
// global x ===>  6

console.log("-------------------------------------------------");

// Example: 2

function parentFunction() {
  let x = 3;
  console.log("x outside ===> ", x);
  return function () {
    return (x = x + 10);
  };
}

// const fun = parentFunction();
// console.log(fun());
// console.log(fun());
// console.log(fun());

// Output:
// x outside ===>  3
// 13
// 23
// 33

// Example 2: Data Encapsulation
console.log("--------------------- Data Encapsulation ---------------------");

// Purpose of Closures:
// Data Encapsulation:

// Closures allow you to create private variables and functions that cannot be accessed from outside the function. This helps in creating a secure, self-contained module where data can be hidden and only manipulated through specific functions.

function counter() {
  let count = 0; // private variable
  return function () {
    return ++count; // closure retains access to `count`
  };
}

const increment = counter();
console.log(increment()); // 1
console.log(increment()); // 2

// Function Factories:

// Closures are useful for creating factory functions, where the outer function provides a set of shared variables that the inner function can use, even when called later.

// Example 3: Dynamic Function Creation

console.log("--------------- Dynamic Function Creation ---------------");

function createMultiplier(multiplier) {
  return function (num) {
    return num * multiplier; // closure retains access to `multiplier`
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// Example 4: Dynamic Function Creation

console.log("--------------- Asynchronous operations ---------------");

// Callback Functions:

// Closures are frequently used in asynchronous operations or event handling where a function needs to remember the environment in which it was created.

function fetchData(apiEndpoint) {
  return function () {
    console.log(`Fetching from: ${apiEndpoint}`);
  };
}

const fetchUsers = fetchData("https://api.example.com/users");
setTimeout(fetchUsers, 1000); // after 1 second, fetchUsers still knows `apiEndpoint`

// Example 5: Memory Efficiency

console.log("--------------- Memory Efficiency ---------------");

function memoize(fn) {
  const cache = {}; // Store results of previous calls

  return function (arg) {
    if (cache[arg] !== undefined) {
      console.log(`Fetching from cache for: ${arg}`);
      return cache[arg];
    }

    console.log(`Computing result for: ${arg}`);
    const result = fn(arg);
    cache[arg] = result; // Save result to cache
    return result;
  };
}

// Function to be memoized
function square(n) {
  return n * n;
}

// Create a memoized version of the square function
const memoizedSquare = memoize(square);

console.log(memoizedSquare(5)); // Computes and logs: 25
console.log(memoizedSquare(5)); // Fetches from cache and logs: 25
console.log(memoizedSquare(6)); // Computes and logs: 36
console.log(memoizedSquare(6)); // Fetches from cache and logs: 36

// // Memoize:
// function memoize(fn) {
//   const cache = {};
//   return function (...args) {
//     const key = JSON.stringify(args);
//     if (cache[key]) {
//       return cache[key];
//     }
//     const result = fn(...args);
//     cache[key] = result;
//     // console.log("From cache");
//     return result;
//   };
// }

// const factorial = memoize(function (n) {
//   if (n === 0) return 1;
//   return n * factorial(n - 1);
// });

// console.log(factorial(5)); // 120
// console.log(factorial(5)); // Retrieved from cache: 120
