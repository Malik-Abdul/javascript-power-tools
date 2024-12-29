const familyTree = [];

const addParents = () =>
  new Promise((resolve) => {
    const prevId = familyTree.length;
    const newParent = {
      id: prevId + 1,
      name: `Parent-${prevId + 1}`,
      children: [],
    };
    familyTree.push(newParent);
    resolve(newParent);
  });

const addChild = (parentId) => {
  return new Promise((resolve, reject) => {
    const parent = familyTree.find((tree) => tree.id == parentId);
    if (parent) {
      const prevId = parent.children.length;
      const newChild = {
        id: prevId + 1,
        name: `Child-${prevId + 1} of Parent-${parentId}`,
        children: [],
      };
      parent.children.push(newChild);
      resolve(newChild);
    } else {
      reject(`No Parent found with id ${parentId}`);
    }
  });
};

const addGrandChild = (parentId, childId) => {
  return new Promise((resolve, reject) => {
    const parent = familyTree.find((tree) => tree.id == parentId);
    if (parent && childId) {
      const child = parent.children.find((tree) => tree.id == childId);
      if (child) {
        const prevId = child.children.length;
        const newGrandChild = {
          id: prevId + 1,
          name: `GrandChild-${
            prevId + 1
          } of child-${childId} of parent-${parentId}`,
          children: [],
        };
        child.children.push(newGrandChild);
        resolve(newGrandChild);
      } else {
        reject(
          `Unable to add Grand Child under child-${childId} under Parent-${parentId}`
        );
      }
    } else {
      reject(`No Parent found with id ${parentId}`);
    }
  });
};

const showFullTree = () => {
  //   console.log("getFamilyTree");
  //   getFamilyTree();
  console.log("getParents");
  getChildren(1, familyTree);
  console.log("getChildren");
  getChildren(3, familyTree);
};

const getFamilyTree = () => {
  console.log(JSON.stringify(familyTree, null, 2));
};

// const getChildren = (level, nodes, count = 1) => {
//   if (level == count) {
//     const data = nodes.flat().map((node) => node.name);
//     console.log(data);
//   } else {
//     const children = nodes.flatMap((node) => node.children);
//     return getChildren(level, children, count + 1);
//   }
// };

const getChildren = (level, nodes, count = 1) => {
  if (count == level) {
    const names = nodes.map((node) => node.name);
    console.log(names);
  } else {
    const children = nodes.flatMap((node) => node.children);
    getChildren(level, children, count + 1);
  }
};

addParents()
  .then(() => addParents())
  .then(() => addParents())
  .then(() => addChild(1))
  .then(() => addChild(1))
  .then(() => addChild(2))
  .then(() => addGrandChild(1, 1))
  .then(() => showFullTree())
  .catch((error) => console.log(`Catch Error: ${error}`));
