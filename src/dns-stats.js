const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let domainObj = {};
  domains = domains.map((item) => item = item.split('.').reverse().map((item) => '.' + item));
  for(let domain of domains) {
    let strDomain = '';
    for(let item of domain) {
      strDomain += item;
      if(!(strDomain in domainObj)) {
        domainObj[strDomain] = 1;
      }else {
        domainObj[strDomain]++;
      }
    }
  }

  return domainObj;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getDNSStats
};
