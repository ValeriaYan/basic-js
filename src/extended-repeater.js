const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = `${str}`;
  let resultStr = [];
  let additionStr = [];
  resultStr[0] = str;
  if('repeatTimes' in options) {
    for(let i = 0; i < options['repeatTimes'] -  1; i++) {
      resultStr.push(str);
    }
  }
  if('addition' in options) {
    options['addition'] = `${options['addition']}`
    additionStr.push(options['addition']);
    for(let i = 0; i < options['additionRepeatTimes'] - 1; i++) {
      additionStr.push(options['addition']);
    }
  }

  if('additionSeparator' in options) {
    additionStr = additionStr.join(`${options['additionSeparator']}`);
  }else {
    additionStr = additionStr.join('|');
  }

  resultStr = resultStr.map((item) => item += additionStr);
  if('separator' in options) {
    return resultStr.join(`${options['separator']}`)
  }

  return resultStr.join('+');
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

// repeater('REPEATABLE_STRING', { repeatTimes: 2, addition: 'ADDITION', additionRepeatTimes: 3 })

module.exports = {
  repeater
};
