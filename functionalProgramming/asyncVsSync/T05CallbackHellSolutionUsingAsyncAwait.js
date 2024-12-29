// Helper function 1: Process full data
async function userFullData(data) {
  try {
    const users = data.users;
    console.log("users ===> ", users);
    return users;
  } catch (error) {
    throw new Error("Error in userFullData: " + error.message);
  }
}

// Helper function 2: Process limited data (name and age)
async function userLimitedData(users) {
  try {
    const userNamesAndAge = users.map((user) => ({
      id: user.id,
      age: user.age,
      name: user.firstName,
    }));
    return userNamesAndAge;
  } catch (error) {
    throw new Error("Error in userLimitedData: " + error.message);
  }
}

// Helper function 3: Filter users above age 40
async function usersAboveAgeData(users) {
  try {
    const aboveAge = users.filter((user) => user.age > 40);
    // console.log("Above Age Users ===> ", aboveAge);
    return aboveAge;
  } catch (error) {
    throw new Error("Error in usersAboveAgeData: " + error.message);
  }
}

// Main function to fetch and process users data
async function fetchUsers(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();
    const users = await userFullData(data);
    const limitedUsers = await userLimitedData(users);
    const aboveAgeUsers = await usersAboveAgeData(limitedUsers);

    console.log("Final Result ===> ", aboveAgeUsers);
  } catch (error) {
    console.log("Error ===> ", error.message);
  }
}

// Calling the function with the API URL
fetchUsers("https://dummyjson.com/users");
