const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let nameTeam = '';
  if(!Array.isArray(members)) {return false}
  members.forEach((nameMember) => {
    if(typeof nameMember == 'string') {
      nameMember = nameMember.trim();
      nameTeam += nameMember[0].toUpperCase();
    }
  })
  if(nameTeam == '') {
    return false;
  }

  nameTeam = nameTeam.split('');
  nameTeam.sort();
  return nameTeam.join('');
}

module.exports = {
  createDreamTeam
};
