// So what is the closure:
// A closure is a function having access to the parent scope, even after the parent function has closed.

// There are 2 parst of above defination

// A closure is a function having access to the parent scope,
// This above part is lexical scope

// even after the parent function has closed.
// This above part is the key point of closure

// Further explanation

// A closure is created when we define a function, not when a function is executed

// Let modify the above example

// global
var x = 2;

function outerFunction() {
  let y = 3;
  console.log("outerFunction y ===> ", y);

  function innerFunction() {
    y = y + 2;
    console.log("innerFunction y ===> ", y);
    x = x + 2;
    console.log("global x ===> ", x);

    // The child function has access to the values of its parent function and the global scope
    // This is lexical scope
  }
  //   Instead of Call of child function in the parent function just return
  return innerFunction;
}

const fn = outerFunction();

fn();
fn();
fn();

// Output:

// outerFunction y ===>  3
// innerFunction y ===>  5
// global x ===>  4
// innerFunction y ===>  7
// global x ===>  6
// innerFunction y ===>  9
// global x ===>  8

// Onother Example:

function parentFunction() {
  let x = 3;
  console.log("x outside ===> ", x);
  return function () {
    return (x = x + 10);
  };
}

const fun = parentFunction();
console.log(fun());
console.log(fun());
console.log(fun());

// Output:
// x outside ===>  3
// 13
// 23
// 33

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

function createMultiplier(multiplier) {
  return function (num) {
    return num * multiplier; // closure retains access to `multiplier`
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// Callback Functions:

// Closures are frequently used in asynchronous operations or event handling where a function needs to remember the environment in which it was created.

function fetchData(apiEndpoint) {
  return function () {
    console.log(`Fetching from: ${apiEndpoint}`);
  };
}

const fetchUsers = fetchData("https://api.example.com/users");
setTimeout(fetchUsers, 1000); // after 1 second, fetchUsers still knows `apiEndpoint`

// Memory Efficiency:
