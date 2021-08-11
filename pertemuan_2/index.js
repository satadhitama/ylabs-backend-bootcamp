const {isString, isNumber, isBoolean} = require('./validator')
const {floatToInt, stringToNum, checkNumber} = require('./notation')

let num = 30;
let float = 3.14
let bool = true;
let string = '25';

console.log(isString(string));
console.log(isNumber(num));
console.log(isBoolean(bool));

console.log(floatToInt(float));
console.log(stringToNum(string));
console.log(checkNumber(num));
