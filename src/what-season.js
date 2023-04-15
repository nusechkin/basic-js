const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

function getSeason(date) {
    const months = ['winter', 'spring', 'summer', 'autumn'];
    const monthsNumberMatrix = [[11, 0, 1],
                                [2, 3, 4],
                                [5, 6, 7],
                                [8, 9, 10]];
    if (arguments.length === 0) {
      return 'Unable to determine the time of year!';
    }
    
    try{
      var str = date.toISOString();
    }catch(e){
      throw new Error('Invalid date!');
    }

    try {
      const curMonth = date.getMonth();
      for (let i = 0; i < monthsNumberMatrix.length; i++) {
        if (monthsNumberMatrix[i].includes(curMonth)) {
          return months[i];
        }
      }
    } catch (e) {
      throw new Error('Invalid date!');
    }
}

module.exports = {
  getSeason
};
