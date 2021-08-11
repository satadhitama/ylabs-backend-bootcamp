function floatToInt(number) {
  try {
    return Math.floor(number);
  } catch (e) {
    console.log('Input yang dimasukkan harus Number!');
  }
}

function stringToNum(string) {
  if (!isNaN(string)) {
    let n = parseFloat(string)
    if (Number(n) === n && n % 1 === 0) {
      return parseInt(n);
    }
    else if (Number(n) === n && n % 1 !== 0) {
      return n;
    }
  } else {
    throw 'Input harus berupa string Number'
  }
}

function checkNumber(number) {
  if (number % 2 === 1) {
    return 'ganjil';
  } else if (number % 2 === 0) {
    return 'genap';
  } else {
    throw 'Input harus bilangan bulat'
  }
}

module.exports = {floatToInt, stringToNum, checkNumber};