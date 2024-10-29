const addTwo = (x) => x + 2;
const subtractOne = (x) => x - 1;
const multiplyFive = (x) => x * 5;

// Notice how the functions executes from inside to outside & fro left to right

const result = multiplyFive(subtractOne(addTwo(2))); // 15

console.log("result ===> ", result);

// The higher order function "reduce" takes a list of values and applies a function to each of those values, accumulting a single result
console.log([1, 2, 3].reduce((acc, item) => acc + item)); // 6
console.log("initial value 2");
console.log([1, 2, 3].reduce((acc, item) => acc + item, 2)); // 8
const getMax = (a, b) => Math.max(a, b);
console.log([1, 2, 3].reduce(getMax)); // 3
console.log([1, 2, 3].reduce(getMax, 5)); // 5

// To get compose order from right to left as we see with nested function call in our above example, we need reduceRight

// First we will see how reduceRight works

console.log([1, 2, 3].reduceRight((acc, item) => acc + item)); // 6

// Compose (Right-to-Left)

const compose =
  (...fn) =>
  (val) => {
    return fn.reduceRight((acc, currentFunction) => {
      return currentFunction(acc);
    }, val);
  };

const composeResult = compose(multiplyFive, subtractOne, addTwo);
console.log("Compose (Right-to-Left)");
console.log(composeResult(2)); // 15

// Pipe (Left-to-Right)
const pip =
  (...fn) =>
  (val) => {
    return fn.reduce((acc, currentFunction) => {
      return currentFunction(acc);
    }, val);
  };

const pipResult = pip(multiplyFive, subtractOne, addTwo);
console.log("Pipe (Left-to-Right)");

console.log(pipResult(2)); // 11

// ---------------- How currying Help --------------------------

const str = " javascript ";
console.log(str); //  javascript

console.log("simple manipulation");
console.log("<div>" + str.trim().toUpperCase() + "</div>"); // <div>JAVASCRIPT</div>

// With functions

const trim = (str) => str.trim();
const toUpperCase = (str) => str.toUpperCase();
const addDiv = (str) => "<div>" + str + "</div>";

console.log("with functions");
console.log(addDiv(toUpperCase(trim(str)))); //  <div>JAVASCRIPT</div>

const res = compose(addDiv, toUpperCase, trim);
console.log("with compose");

console.log(res(str)); //  <div>JAVASCRIPT</div>

// Now we want to add a span and we will try to modify the addDiv

const addTag = (str, tag) => `<${tag}>${str}</${tag}>`;

const res1 = compose(addTag, toUpperCase, trim);
console.log(res1(str)); // <undefined>JAVASCRIPT</undefined>

const addTag2 = (tag) => (str) => `<${tag}>${str}</${tag}>`;

const res2 = compose(addTag2("span"), toUpperCase, trim);
console.log(res2(str)); // <span>JAVASCRIPT</span>
