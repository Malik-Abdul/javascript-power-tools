var a;
function scope() {
  console.log("a ===> ", a);
  var a = 2;
}
// scope();

const obj = { name: "Malik", id: 22 };

function fn() {
  console.log(this.name);
}
// fn();

const getMax = (a, b) => {
  console.log(a, b);
  return Math.max(a, b);
};
console.log([11, 5, 3].reduceRight(getMax)); // 3
// console.log([1, 2, 3].reduce(getMax, 5)); // 5
