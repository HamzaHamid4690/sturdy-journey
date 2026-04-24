console.log("This will be logged first.");
setInterval(() => {
  console.log("Hello, World!"); // This will be logged third, after the current call stack is cleared.
}, 2000);
console.log("This will be logged second.");
