import { getFlag } from "./flag";

let message = `${getFlag("--greeting")} ${getFlag("--name")}`;

console.log(message);