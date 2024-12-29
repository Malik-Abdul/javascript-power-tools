// Several libraries like lodash, Ramda and others
// have this feature built-in

// Here is 1 line Vanilla JS solution
// But it does not work with Dates, functions, undefined, infinity, RegExp, Maps, Sets, Blobs, FileLists, ImageDatas, and other complex data types

const scoreObject = {
  first: 44,
  second: 12,
  third: { a: 1, b: 2 }, // so we have a nested objec
};

const newScoreObj = JSON.parse(JSON.stringify(scoreObject));

console.log("newScoreObj");
console.log(newScoreObj); // { first: 44, second: 12, third: { a: 1, b: 2 } }
console.log(newScoreObj === scoreObject); // false

newScoreObj.third.a = 66;

console.log("scoreObject ===> ", scoreObject); // scoreObject ===>  { first: 44, second: 12, third: { a: 1, b: 2 } }
console.log("newScoreObj ===> ", newScoreObj); // newScoreObj ===>  { first: 44, second: 12, third: { a: 66, b: 2 } }

// A deep clone function

const deepClone = (obj) => {
  if (typeof obj !== "object" || obj === null) return obj;

  //   create an array or object to hold the values
  const newObject = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    const value = obj[key];

    // recursive call for nested objects and arrays
    newObject[key] = deepClone(value);
  }
  return newObject;
};
const scoreArray = [44, 23, 12];
const newScoreArray = deepClone(scoreArray);

console.log("newScoreArray");
console.log(newScoreArray); // [ 44, 23, 12 ]

console.log(newScoreArray === scoreArray); // false

// Now we can make a pur function

const pureAddToScoreHistory = (array, score, cloneFunc) => {
  const newArray = cloneFunc(array);
  newArray.push(score);
  return newArray;
};

const pureScoreHistory = pureAddToScoreHistory(scoreArray, 18, deepClone);

console.log("pureScoreHistory");
console.log(pureScoreHistory);
console.log("scoreArray");
console.log(scoreArray);
