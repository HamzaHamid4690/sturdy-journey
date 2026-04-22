console.log(__dirname); // These are the global variables in node.js
console.log(__filename);
setInterval(() => {
  // This is a function that will run every 1000 milliseconds (1 second) and inorder to stop it, press ctrl+c in the terminal
  console.log("Hello World");
}, 1000);
