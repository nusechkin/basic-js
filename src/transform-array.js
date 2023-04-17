const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (arr === []) {
    return arr;
  }
  let transfrormArr = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  var clone = arr.slice(0);
  let found = clone.findIndex(elem => elem === '--discard-next');
  if (typeof found === Number) {
    clone.splice(found, 2);
  }
  found = clone.findIndex(elem => elem === '--discard-prev');
  if (typeof found === Number) {
    clone.splice(found, 1);
    if (found > 0) {
      //clone.splice(found - 1, 2);
    }
    else {
      //clone.splice(found, 2);
    }
  }
  // found = clone.findIndex(elem => elem === '--double-next');
  // if (found) {
  //   clone.splice(found, 1);
  //   clone.splice(found, 0, clone[found]);
  // }
  return clone;
}

module.exports = {
  transform
};
