const input = require("fs").readFileSync("uri-1001/stdin", "utf8");
const lines = input.split('\n');

const [a, b] = lines.map(line => parseInt(line));
const sum = (a, b) => a + b;

console.log(`X = ${sum(a, b)}`);
