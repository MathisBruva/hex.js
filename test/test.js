const hex = require('hex.js').hex;
const unHex = require('hex.js').unHex;

console.log(hex('Hello world!')); // -> 48656c6c6f20776f726c6421

console.log(unHex('48656c6c6f20776f726c6421')); // -> Hello world!
