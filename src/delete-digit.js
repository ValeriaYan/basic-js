const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let digitStr = n.toString().split('');
  let indexDeleteDigit = 0;
  for(let i = 0; i < digitStr.length; i++) {
    if(digitStr[i] < digitStr[i + 1]) {
      indexDeleteDigit = i;
      break;
    }
    if(i == digitStr.length - 1) {
      indexDeleteDigit = i;
    }
  }
  digitStr = digitStr.join('');
  return +(digitStr.slice(0, indexDeleteDigit) + digitStr.slice(indexDeleteDigit + 1));
}

module.exports = {
  deleteDigit
};
