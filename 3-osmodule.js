const os = require("os");

console.log(`OS Platform: ${os.platform()}`);
console.log(os.userInfo());

console.log(`Uptime: ${os.uptime()} seconds`);
