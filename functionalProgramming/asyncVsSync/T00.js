// async blocking or non-blocking?
// https://docs.libuv.org/en/v1.x/

console.log("=========================Synchronous======================");

// Synchronous
// In synchronous programming, tasks are executed sequentially. Each operation must complete before the next one starts. This can lead to blocking behavior, meaning that if a function takes a long time to execute, it will delay the execution.

function syncTask() {
  console.log("Task 1");
  console.log("Task 2");
  console.log("Task 3");
}

syncTask();
console.log("This runs after Task 1, 2, and 3");

// Output:
// Task 1
// Task 2
// Task 3
// This runs after Task 1, 2, and 3

console.log("=========================Asynchronous======================");

// Asynchronous
// In asynchronous programming, tasks can be executed in the background, allowing the program to continue executing other code without waiting for the task to complete. This is particularly useful for operations that might take a significant amount of time, such as network requests.

function asyncTask() {
  console.log("Task 1");
  setTimeout(() => {
    console.log("Task 2 (completed after 2 seconds)");
  }, 2000);
  console.log("Task 3");
}

asyncTask();
console.log("This runs immediately after Task 2");

// Output:
// Task 1
// Task 3
// This runs immediately after Task 2
// Task 2 (completed after 2 seconds)

// In JavaScript, there are several ways to perform asynchronous operations. Here are the most common methods:
// 1. Callbacks
// 2. Promises
// 3. Async/Await
