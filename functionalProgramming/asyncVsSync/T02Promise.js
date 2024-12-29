function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    // Simulate a network request with a delay
    setTimeout(() => {
      const userData = {
        1: { name: "John", age: 28 },
        2: { name: "Jane", age: 34 },
        3: { name: "Alice", age: 25 },
      };

      if (userData[userId]) {
        resolve(userData[userId]); // Successfully fetched user data
      } else {
        reject("User not found"); // Error: User ID is invalid
      }
    }, 2000); // Simulate network delay
  });
}

// Consuming the promise
fetchUserData(2).then(
  (user) => {
    console.log("User Data:", user); // On success, log the user data
  },
  (error) => {
    console.log("Error:", error); // On failure, log the error
  }
);
