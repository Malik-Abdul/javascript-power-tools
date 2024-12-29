// ---------------------
// ---------------------
// JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.
console.log("============ Fucntion call vs Function defined ============");
function myFirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Goodbye");
}
function myDisplayer(some) {
  console.log("some ===> ", some);
}

mySecond();
myFirst();

// Output:
// some ===>  Goodbye
// some ===>  Hello

// Sometimes you would like to have better control over when to execute a function.
// Suppose you want to do a calculation, and then display the result.
// You could call a calculator function (myCalculator), save the result, and then call another function (myDisplayer) to display the result:

const display = (result) => {
  console.log("Display result");
  console.log("result ===> ", result);
};
const calculator = (num1, num2) => {
  return num1 + num2;
};
display(calculator(5, 5));

// Or, you could call a calculator function (myCalculator), and let the calculator function call the display function (myDisplayer):

function myDisplayer(result) {
  console.log("Display result");
  console.log("result ===> ", result);
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  myDisplayer(sum);
}

myCalculator(5, 5);

console.log("============ callback ============");

// A callback is a function passed as an argument to another function.
// Using a callback, you could call the calculator function (myCalculator) with a callback (myCallback), and let the calculator function run the callback after the calculation is finished:

function display3(result) {
  console.log("Display result with callback");
  console.log("result ===> ", result);
}

function myCalculator3(num1, num2, callbackFn) {
  let sum = num1 + num2;
  callbackFn(sum);
}
myCalculator3(2, 2, display3);

// Problem
// // Create an Array
// const myNumbers = [4, 1, -20, -7, 5, 9, -6];
// // Call removeNeg with a callback

function itrateArr(arr, callbackFn) {
  const positiveArr = [];
  for (const num of arr) {
    if (callbackFn(num)) {
      positiveArr.push(num);
    }
  }
  return positiveArr;
}

console.log(itrateArr([4, 1, -20, -7, 5, 9, -6], (x) => x > 0));
