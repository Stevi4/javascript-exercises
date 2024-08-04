const removeFromArray = function (array, ...remove) {
  for (const rem of remove) {
    array = array.filter((arg) => arg !== rem);
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
