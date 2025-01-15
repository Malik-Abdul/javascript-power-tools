// Throttle:
// Execution Timing: Throttle: Executes at regular intervals during events.
// Frequency: Limits the frequency of function execution.
// Common Usage: Scroll events, window resizing, animations.

// Debounce:
// Execution Timing: Executes only after a pause in event firing.
// Frequency: Ensures function executes only once.
// Common Usage: Search inputs, form validation, auto-saving.

// Both techniques help optimize performance and prevent unnecessary or excessive function executions!

function debounce(fn, delay) {
  let timeOut;
  return function (...args) {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => fn(...args), delay);
  };
}
function logMessage(message) {
  console.log(`Debouncing! ${message}`);
}
const debounceLog = debounce(logMessage, 1000);

// debounceLog("Hello");
debounceLog("Hi");
// debounceLog("How are you?");

// setTimeout(() => debounceLog("Hello"), 0);
// setTimeout(() => debounceLog("Hi"), 50); // Within the delay
setTimeout(() => debounceLog("How are you?"), 100); // After the delay

// Only "How are you?" will be logged after 1 second of inactivity.

// It wraps the original func.
// Clears the timeout every time it’s called.
// Resets the timeout, ensuring func only runs after the specified delay (in this case, 1000ms) when no further calls occur.

// Calls debouncedLog multiple times in quick succession.
// Only the last call ("How are you?") is executed, as all prior calls are cleared by the timeout.

// const [input, setInput] = useState("");
// const [debounceInput, setDebounceInput] = useState(input);

// useEffect(() => {
//   const handle = setTimeout(() => {
//     setDebounceInput(input);
//   }, 500);
//   return () => {
//     clearTimeout(handle);
//   };
// }, [input]);

// useEffect(() => {
//   const fetcher = async () => {
//     const responce = await fetch("abc.com/users");
//     if (!responce.ok) {
//       throw new Error("Some error");
//     }
//     const jsonData = await responce.json();
//     setData(jsonData);
//   };
//   fetcher();
// }, [debounceInput]);
