function isString(data) { 
  return typeof data === 'string';
}

function isNumber(data) {
  return typeof data === 'number';
}

function isBoolean(data) {
  return typeof data === 'boolean';
}

module.exports = {isString, isNumber, isBoolean};