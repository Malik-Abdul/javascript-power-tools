// shallow copy vs. Deep copy (clones)
// that is making clones of structural data types
// there are different types of clones

// A shallow copy creates a new object or array, but it only copies the references for nested objects, not the objects themselves. This means if the original object contains another object (or array), both the original and the copied object will refer to the same nested object.

// Shallow Copy
// with the spread operator

console.log("=========================Shallow Copy==========================");

const xArray = [1, 2, 3];
const yArray = xArray;
const zArray = [...yArray, 10];

console.log("xArray ===> ", xArray); // xArray ===>  [ 1, 2, 3 ]
console.log("yArray ===> ", yArray); // yArray ===>  [ 1, 2, 3 ]
console.log("zArray ===> ", zArray); // zArray ===>  [ 1, 2, 3, 10 ]

// so we have made a shallow copy using the spread operator

// we can also use the Object.assign

const tArray = Object.assign([], zArray);

console.log("tArray ===> ", tArray); // tArray ===>  [ 1, 2, 3, 10 ]
console.log(tArray === zArray); // false because different memory references
// so
console.log("{} == {}");
console.log({} == {}); // false

tArray.push(11);
console.log("tArray after push");
console.log(tArray); // [ 1, 2, 3, 10, 11 ]

console.log("zArray after tArray pushed 11");
console.log(zArray); // [ 1, 2, 3, 10 ]

// But if there are nested arrays or objects

tArray.push([22, 33, 44]);

const vArray = [...tArray];

console.log("tArray ===> ", tArray); // tArray ===>  [ 1, 2, 3, 10, 11, [ 22, 33, 44 ] ]
console.log("vArray ===> ", vArray); // vArray ===>  [ 1, 2, 3, 10, 11, [ 22, 33, 44 ] ]

vArray[5].push(99);

console.log("tArray ===> ", tArray); // tArray ===>  [ 1, 2, 3, 10, 11, [ 22, 33, 44, 99 ] ]
console.log("vArray ===> ", vArray); // vArray ===>  [ 1, 2, 3, 10, 11, [ 22, 33, 44, 99 ] ]

// shallow copy do not share the same reference
// Here is the problem
// is the shallow copy nested structural data types still share a reference
// means: in JavaScript, when you perform a shallow copy of a nested structural data type (like an object or array), the top-level object is copied, but the nested objects or arrays still share the same reference.
const obj1 = {};
const obj2 = {};

console.log(obj1 === obj2); // false (different references)

const obj3 = obj1;
console.log(obj1 === obj3); // true (same reference)

// whether you use spread operator or Object.assign
// when we make shallow copy, they do not share the references untill there is a nested structural data type

// What it comes to objects, what about...
//  ...Object.freez() ??

// we can freez to prevent to mutating

const scoreObject = {
  first: 44,
  second: 12,
  third: { a: 1, b: 2 }, // so we have a nested objec
};
console.log("scoreObject");
console.log(scoreObject); // { first: 44, second: 12, third: { a: 1, b: 2 } }

Object.freeze(scoreObject);

scoreObject.third.a = 8;
scoreObject.first = 88;

console.log("scoreObject");
console.log(scoreObject); //  first: 44, second: 12, third: { a: 8, b: 2 } }
// The value is changed even thow we froozed the object we still able to mutate the value
// It is a shallow freeze
// means the nested object are not freez, other keys are  freezed
// so we still facing the same problem

// So how we avoid these mutations

// instead of shallow copy deep copy is needed to avoid this

console.log({} == {}); // false
// let a deep equal function

const deepEqual = (obj1, obj2) => {
  if (obj1 === obj2) {
    // console.log("Here 1");
    return true; // Same reference or both are null/undefined
  }

  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  ) {
    // console.log("Here 2");
    return false; // Different types or one is null
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false; // Different number of keys

  //   console.log("keys2 ===> ", keys2);

  for (let key of keys1) {
    // console.log("key ===> ", key);
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      //   console.log("Here Others");
      return false; // Key not in obj2 or values are not equal
    }
  }

  console.log("Here 3");

  return true; // Objects are deeply equal
};

console.log(deepEqual({}, {})); // Logs: true

console.log("=========================Deep Copy==========================");
