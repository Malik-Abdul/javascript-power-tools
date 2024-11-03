// ==============

// Lexical scope defines how veriable names are resolved in nested function
// If we have a child function with in a parent function, the child function has access to the scope of a parent function and has access to the global scope
// Means Nested (child) function have access to the scope of their parent functions

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
  //   Call of child function in the parent function
  innerFunction();
}

outerFunction();

// Output
// outerFunction y ===>  3
// innerFunction y ===>  5
// global x ===>  4
// This all procedure is not a closure, it is the example of lexical scope
