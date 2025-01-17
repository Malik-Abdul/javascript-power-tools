console.log("=========================Shallow Copy==========================");

const original = { name: "Malik", info: { age: 28 } };

const shellowCopy = { ...original };

shellowCopy.name = "AG"; // No effect, because it copies the outer object

console.log(original); // { name: 'Malik', info: { age: 28 } }

shellowCopy.info.age = 38;

console.log(original); // { name: 'Malik', info: { age: 38 } }

console.log("------------------------------------------------");

const familyTree = [{ name: "P1", children: [] }];

const familyTreeShallowCopy = [...familyTree];
familyTreeShallowCopy[0].name = "ABC";
familyTreeShallowCopy[0].children = { name: "C1" };

console.log("familyTree ===> ", familyTree);

console.log("familyTreeShallowCopy ===> ", familyTreeShallowCopy);

console.log("=========================Deep Copy==========================");

// Deep Copy

const familyTreeDeepCopy = JSON.parse(JSON.stringify(familyTree));
familyTreeDeepCopy[0].name = "AAAA";
familyTreeDeepCopy[0].children = { name: "C2" };

console.log("familyTree ===> ", familyTree);

console.log("familyTreeDeepCopy ===> ", familyTreeDeepCopy);
