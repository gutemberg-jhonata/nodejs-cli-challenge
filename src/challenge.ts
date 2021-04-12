import { getFlag } from "./flags";

let message = `Hello ${getFlag("--name")}. ${getFlag("--greeting")}`;

console.log(message);