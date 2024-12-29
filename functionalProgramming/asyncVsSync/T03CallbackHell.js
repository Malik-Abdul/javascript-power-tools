console.log("=======================Callback Hell=========================");
function userFullData(data, callback) {
  try {
    const users = data.users;
    console.log("users ===> ", users);
    callback(null, users); // Pass users to the next step
  } catch (error) {
    callback(error, null); // Pass error if something goes wrong
  }
}

function userLimitedData(users, callback) {
  try {
    const userNamesAndAge = users.map((user) => ({
      id: user.id,
      age: user.age,
      name: user.firstName,
    }));
    callback(null, userNamesAndAge); // Pass the transformed data
  } catch (error) {
    callback(error, null); // Pass error if something goes wrong
  }
}

function usersAboveAgeData(users, callback) {
  try {
    const aboveAge = users.filter((user) => user.age > 40);
    // console.log("Above Age Users ===> ", aboveAge);
    callback(null, aboveAge); // Pass the filtered data
  } catch (error) {
    callback(error, null); // Pass error if something goes wrong
  }
}

// Function to fetch data and process it
function fetchUsers(url) {
  // Native fetch returns a Promise, so we use .then() or async/await
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Parse JSON
    })
    .then((data) => {
      // Start the callback chain
      userFullData(data, (err, users) => {
        if (err) {
          console.log("Error in userFullData ===> ", err);
        } else {
          userLimitedData(users, (err, limitedUsers) => {
            if (err) {
              console.log("Error in userLimitedData ===> ", err);
            } else {
              usersAboveAgeData(limitedUsers, (err, aboveAgeUsers) => {
                if (err) {
                  console.log("Error in usersAboveAgeData ===> ", err);
                } else {
                  console.log("Final Result ===> ", aboveAgeUsers);
                }
              });
            }
          });
        }
      });
    })
    .catch((error) => {
      console.log("Error fetching data ===> ", error.message);
    });
}

// Calling the function
fetchUsers("https://dummyjson.com/users");
