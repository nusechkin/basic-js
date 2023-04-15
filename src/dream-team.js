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
  if (!Array.isArray(members)) { //проверка на входящий тип
    return false;
  }
  const allStringArr = members.filter(word => typeof word === 'string'); //убрали всё, что не строка
  const nospacesArr = allStringArr.map(word => word.replace(/\s/g, '')); //убрали лишние пробелы
  const name = nospacesArr.map(word => word.toUpperCase().charAt(0)).sort(); //сначала забрали первую букву, потом отсортировали
  return name.join(''); //склеили
}

module.exports = {
  createDreamTeam
};
