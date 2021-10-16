const input = require("fs").readFileSync("uri-1002/stdin", "utf8");
const lines = input.split('\n');

const [R] = lines.map(line => parseFloat(line));
const pi = 3.14159
const circleArea = (r, pi) => pi * (r * r);
const area = circleArea(R, pi).toFixed(4)

console.log(`A=${area}`);
