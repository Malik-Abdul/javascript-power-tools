const obj = {
  name: "Bob",
  greet: () => {
    console.log(this.name);
  },
};
// obj.greet(); // undefined (inherits `this` from global scope)

const regular = {
  name: "Bob",
  greet: function () {
    const inner = () => console.log(this.name);
    inner(); // "Bob" (inherits `this` from outer function)
  },
};
// regular.greet();

function greet() {
  console.log(this.name);
}

const user = { name: "Malik" };
const user2 = { name: "AG" };

// greet.call();
// greet.call(user);
greet.bind(user);
const userBind = greet.bind(user2);
userBind();
