console.log("This will be logged first.");
setTimeout(() => {
  console.log("Hello, World!"); // This will be logged third, after the current call stack is cleared.
}, 0);
console.log("This will be logged second.");
