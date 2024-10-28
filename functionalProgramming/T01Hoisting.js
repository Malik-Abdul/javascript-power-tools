// Hoisting is a behavior where variable and function declarations are moved to the top of their containing scope (either the function scope or global scope) during the compilation phase, before the code is executed.

// console.log(x); // undefined
var x = 5;

// console.log(y); // ReferenceError: Cannot access 'y' before initialization
// let y = 3;

{
  var x = 1;
  let y = 2;
}
// console.log(x, y); // ReferenceError: y is not defined

// block scope
var a = 1;
function scope() {
  //   var a; // Declaration is hoisted, but not the assignment
  //   console.log("a = ", a); // a =  undefined
  var a = 2;
}
scope();

let obj = {
  firstName: "Malik",
  lastName: "AG",
};

function abc() {
  console.log(this.firstName, this.lastName); // undefined undefined
}
abc();
