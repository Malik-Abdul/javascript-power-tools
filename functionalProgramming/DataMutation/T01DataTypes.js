// Primitive Data Types & Structural Data Types

console.log("====================Primitive Data Types======================");

// Primitive Data Types
// They are immutable, meaning their values cannot be altered once assigned
// Immutable: Once a primitive value is assigned, it cannot be changed.
// Stored by value: When you assign or copy a primitive value, the actual value is copied.

let x = 10;
let y = x;
x = 20;
console.log("x ===> ", x); // 20
console.log("y ===> ", y); // 10

let a = 2;
let b = a;
b += 1;
console.log("a:==>", a); // a:==> 2
console.log("b:==>", b); // b:==> 3

// primitives are immutable

let myName = "Abdul";
myName[0] = "AA";

console.log("myName ===> ", myName); // myName ===>  Abdul instead of AA

// Reassignment is not the same as mutate

// It is reassignment not mutating
myName = "Malik";

console.log("myName ===> ", myName); // myName ===>  Malik

console.log("====================Structural Data Types======================");

// Structural Data Types
// Structural data types are used to represent complex collections of data or objects. These are mutable and are stored by reference.

const obj1 = { a: 10 };
const obj2 = obj1;
obj2.a = 20;
console.log("obj1 ===> ", obj1); // { a: 20 }
console.log("obj2 ===> ", obj2); // { a: 20 }

const xArray = [1, 2, 3];
const yArray = xArray;
yArray.push(33);

console.log("xArray ===> ", xArray); // xArray ===>  [ 1, 2, 3, 33 ]
console.log("yArray ===> ", yArray); // yArray ===>  [ 1, 2, 3, 33 ]

// Structures contain mutable data

let arrayOne = [1, 2, 3];
let arrayTwo = arrayOne;
arrayTwo[0] = 9;

console.log("arrayOne ===> ", arrayOne); // arrayOne ===>  [ 9, 2, 3 ]
console.log("arrayTwo ===> ", arrayTwo); // arrayTwo ===>  [ 9, 2, 3 ]
