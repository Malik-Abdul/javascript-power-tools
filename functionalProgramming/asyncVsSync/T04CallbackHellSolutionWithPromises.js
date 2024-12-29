function userFullData(data) {
  return new Promise((resolve, reject) => {
    try {
      const users = data.users;
      console.log("users ===> ", users);
      resolve(users);
    } catch (error) {
      reject(error);
    }
  });
}

function userLimitedData(users) {
  return new Promise((resolve, reject) => {
    try {
      const userNamesAndAge = users.map((user) => ({
        id: user.id,
        age: user.age,
        name: user.firstName,
      }));
      resolve(userNamesAndAge);
    } catch (error) {
      reject(error);
    }
  });
}

function usersAboveAgeData(users) {
  return new Promise((resolve, reject) => {
    try {
      const aboveAge = users.filter((user) => user.age > 40);
      //   console.log("Above Age Users ===> ", aboveAge);
      resolve(aboveAge);
    } catch (error) {
      reject(error);
    }
  });
}

function fetchUsers(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then((data) => userFullData(data))
    .then((users) => userLimitedData(users))
    .then((limitedUsers) => usersAboveAgeData(limitedUsers))
    .then((aboveAgeUsers) => {
      console.log("Final Result ===> ", aboveAgeUsers);
    })
    .catch((error) => {
      console.log("Error ===> ", error.message);
    });
}

fetchUsers("https://dummyjson.com/users");
