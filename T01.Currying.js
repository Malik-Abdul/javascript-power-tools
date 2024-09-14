// Currying takes a function that receives more than one argument and breaks it into a series of unary (one parameter) functions.
// Therefore, a curried function only takes one parameter at a time.

// So we can define a Currying, it is a technique of transforming a function with multiple arguments into a sequence of functions, each taking a single argument.

// This allows functions to be partially applied, meaning you can call a function with some arguments and get back another function that expects the remaining arguments.

// Here is we done: A nested function one function is calling the next is calling the next and so we were to call this, we will call it instead of passing in parameters all in one set of paranthese, first we call builSandwich and pass in the string "Bacon" and then we pass in Lettuse for the next function and then tomato for the next function so this one big build sandwich function is realy broken into three function and each recieves only one parameter

// function buildPizza(topping1) {
//   return function (topping2) {
//     return function (topping3) {
//       return `Your pizza has ${topping1}, ${topping2}, and ${topping3}.`;
//     };
//   };
// }

// I am convrting into arrow function

// const buildPizza = (topping1) => {
//   (topping2) => (topping3) =>
//     `Your pizza has ${topping1}, ${topping2}, and ${topping3}.`;
// };

// we can convert this into one line

const buildPizza = (topping1) => (topping2) => (topping3) =>
  `Your pizza has ${topping1}, ${topping2}, and ${topping3}.`;

const myPizza = buildPizza("Cheese")("Pepperoni")("Olives");
// console.log(myPizza);

// Output: Your pizza has Cheese, Pepperoni, and Olives.

// In this code, we have a nested function buildPizza. One function is calling the next, and then the next. When we call this, instead of passing all the parameters at once, we call buildPizza with "Cheese" as the first topping. Then, we pass in "Pepperoni" for the second function, and finally "Olives" for the third function. This structure breaks the buildPizza function into three separate functions, where each function receives only one topping at a time.

// Another example for curried function

// here is simple multiply function

const multiply = (x, y) => {
  return x * y;
};

// lets convert this into curried function

const curriedMultiply = (x) => (y) => x * y;
console.log(curriedMultiply(2)); // (y) => x * y
console.log(curriedMultiply(2)(3)); // 6

// we can store the first curried function into a variable

const timesTwenty = curriedMultiply(20);
// So this timesTwenty is the variable that is holding a function and if we pass any number it returns the 20 time for that number
console.log(timesTwenty(3)); // 60
console.log(timesTwenty(2)); // 40

// lets take a real time example in which we pass the salary of employee and we get the 20 percent bonus salary for that employ

const bonusSalary = (bonus) => (salary) => salary + salary * bonus;

const tenPercentBonus = bonusSalary(0.1);

console.log("10 percent bonus on 100000");
console.log(tenPercentBonus(100000));
console.log("10 percent bonus on 145000");
console.log(tenPercentBonus(145000));

const checkUserInfo =
  (fn) =>
  (...args) => {
    // check validity for email
    console.log("Email is valid");
    return fn(...args);
  };

let createdUsers = (...args) => {
  const name = args[0];
  const email = args[1];
  //   console.log(`Users # ${[...args].toString()} created`);
  console.log(`Users:  ${name} with id: ${email} is created`);
};

createdUsers = checkUserInfo(createdUsers);
createdUsers("Malik", "m@mail.com");

createdUsers = checkUserInfo(createdUsers)("AG", "ag@mail.com");

// Another Example

const curry = (fn) => {
  //   console.log("fn.length ===> ", fn.length); // 3 one time: parameters of function total
  // it is a wrapper
  return (curried = (...args) => {
    // console.log("fn.length ===> ", fn.length); // 3 3 and 3 three times: one for each parameter, parameters of function total
    console.log("args.length ===> ", args.length); // 1 2 and 3 three times: oargs are passed each time utill last args are passed
    if (fn.length !== args.length) {
      return curried.bind(null, ...args);
    }
    return fn(...args);
  });
};

const total = (x, y, z) => x + y + z;

const curriedTotal = curry(total);

console.log("curriedTotal ===> ", curriedTotal(10)(20)(30));

// School Management System with Grade Calculation

// Function to store student details and calculate the grade based on score
const recordStudentDetails = (name, classLevel, subject, score) => {
  const grade = calculateGrade(score);
  const result = grade === "F" ? "Fail" : "Pass";
  return `Student Name: ${name}, Class: ${classLevel}, Subject: ${subject}, Score: ${score}, Grade: ${grade}, Result: ${result}`;
};

// Function to calculate grade based on score
const calculateGrade = (score) => {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
};

// Currying the function
const curriedRecord = curry(recordStudentDetails);

// Example usage: recording student details and calculating result
console.log(curriedRecord("John")("10th Grade")("Mathematics")(85));
