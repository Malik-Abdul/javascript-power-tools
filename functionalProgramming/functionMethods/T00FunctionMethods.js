// call(), apply() and bind()
// Function call(): With the call() method, you can write a method that can be used on different objects.
// allows you to invoke the function with a specific this context and pass arguments directly. This is especially useful when you want to call a method of an object in the context of another object.
const person1 = {
  firstName: "Abdul",
  lastName: "Ghafoor",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
  printFullName: () => {
    return this.firstName + " " + this.lastName;
  },
  greet: function (greeting, punctuation) {
    return `${greeting}: ${this.name}${punctuation}`;
  },
};
console.log("-------Object-------");
console.log("person.getFullName()");
console.log(person1.getFullName());
console.log("person.printFullName()");
console.log(person1.printFullName());
const person2 = {
  firstName: "Malik",
  lastName: "Awan",
};

console.log("-------call-------");

console.log("//Example 1: Borrowing Methods");
console.log(person1.getFullName.call(person2));
console.log("//Example 2: Passing Arguments");
console.log(person1.greet.call({ name: "Ahmad Ali" }, "Asalam u alikum", "!"));

// Function apply(): With the apply() method, you can write a method that can be used on different objects.
// allows you to call a function with a specific this context and arguments provided as an array or array-like object. It is useful for borrowing methods or applying functions to an array of arguments without explicitly listing them.
console.log("-------apply-------");
console.log("//Example 1: Borrowing Methods");
console.log(person1.getFullName.apply(person2));
console.log("//Example 2: Passing Arguments");
console.log(
  person1.greet.apply({ name: "Muhammad Ghazali" }, ["Welcome", "!"])
);

// Function bind(): With the bind() method, an object can borrow a method from another object.
// In JavaScript, the bind method is similar to call and apply, but it works a bit differently
// It doesn't immediately invoke the function, instead, it returns a new function that is permanently bound to a specific this value and, optionally, certain arguments.
console.log("-------bind-------");
const greetPerson = person1.greet.bind(
  { name: "Muhammad Jalal-u-Din" },
  "Welcome"
);
console.log(greetPerson("!"));

const greetPerson2 = person1.greet.bind({ name: "Muhammad Jalal-u-Din" });
console.log(greetPerson2("Sweet", "!"));

function add(a, b) {
  return a + b;
}

const add5 = add.bind(null, 5);
console.log(add5(3));
