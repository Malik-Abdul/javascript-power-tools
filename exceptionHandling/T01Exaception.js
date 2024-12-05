console.log("--------------------------");
console.log("Main flow statred");
try {
  const num = 10; // No error here, but example of risky code
  if (num % 2 == 0) {
    throw new Error("Even Numbers are not allowed"); // This message will appear in error.message
    // This line will NEVER execute because `throw` immediately stops further execution of this block.
    console.log("Stop the execution"); // This won't execute.
  }
  console.log("Result:", result); // This line also won't execute because of the `throw`.
  console.log("Even not executing this block"); // Same reason: this won't execute.
} catch (error) {
  // This block is executed because an error was thrown.
  console.error("Catching the error:- An error occurred:", error.message);
  console.log("This block of code is working after error"); // This will execute after handling the error.
}
console.log("Main flow is running");

// Explanation:

// ✅ The throw statement raises an error with the message "Even Numbers are not allowed".
// ✅ The catch block is executed and logs the error message.
// ❌ console.log("Stop the execution"); will not execute because throw halts execution.
// ❌ Lines after throw in the try block won't execute, so "Result:" and "Even not executing this block" will never appear in the console.

// Output of the Code:
// Catching the error:- An error occurred: Even Numbers are not allowed
// This block of code is working after error

// Behavior of throw:
// he throw statement halts the execution of the current block of code and transfers control to the nearest enclosing catch block.

// Execution Flow:
// When throw is encountered, it:
// 1) Creates the error object.
// 2) Exits the try block immediately.
// 3) Transfers control to the catch block.

// What Happens in the catch Block:
// The catch block executes only if an error is thrown in the corresponding try block.
// The error object (error) in the catch block contains details about the error (e.g., message).

// Use Finally:

console.log("--------------------------");
console.log("Updated Code with finally");

try {
  const num = 10; // No error here, but example of risky code
  if (num % 2 == 0) {
    throw new Error("Even Numbers are not allowed"); // This message will appear in error.message
    console.log("Stop the execution"); // This won't execute.
  }
  console.log("Result:", result); // This won't execute.
  console.log("Even not executing this block"); // This won't execute.
} catch (error) {
  console.error("Catching the error:- An error occurred:", error.message); // This will execute when an error is thrown.
  console.log("This block of code is working after error"); // This will also execute after the error is caught.
} finally {
  console.log(
    "Finally block: This will always execute, regardless of an error."
  ); // Always executes.
}
console.log("Main flow is running");
