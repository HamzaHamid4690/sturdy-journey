const EventEmitter = require("events");

const customEmmitter = new EventEmitter();

customEmmitter.on("response", (name, id) => {
  console.log(`data received name: ${name} id: ${id}`);
});

customEmmitter.emit("response", "john", 34);
