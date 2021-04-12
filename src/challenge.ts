const { getFlag } = require("./flag");

let message = `${getFlag("--greeting")} ${getFlag("--name")}`;

console.log(message);