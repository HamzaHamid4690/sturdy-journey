// The simple way to do it is to import default as below:-
// import names from "./2-names.js";
// import sayHi from "./2-function.js";

// The second way is to import as below:-
const name = require("./2-names.js");
const sayHi = require("./2-function1.js");
const data = require("./2-arrayoritems.js");
require("./2-function2.js");

sayHi(name.name1);
sayHi(name.name2);
console.log(data);

// console.log(names);
