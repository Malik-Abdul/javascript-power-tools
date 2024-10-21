// Pure functions require you to avoid
// mutating the data

// Impure function that mutate the data
const addToScoreHistory = (array, score) => {
  array.push(score);
  return array;
};

const scoreArray = [44, 23, 12];
console.log(addToScoreHistory(scoreArray, 14));

// This mutates the original array
// This is considered to be a side-effect.

// Note: "const" does not make the array immutable

// When you create the array with const you can change the elements in array but cannot reassign the array

const sArray = [2, 3, 6];
console.log(sArray);
// const sArray = [4, 7, 8]; it is reassign and not allowed

// we need to modify our function so it does not
// mutate the original data

// Before we change our to a pure function from an impure function we need to learn about shallow copy vs. Deep copy (clones)
