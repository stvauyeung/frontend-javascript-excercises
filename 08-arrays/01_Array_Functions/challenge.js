module.exports.reversePlusOne = function(array) {
  array.push(1);
  array.reverse();
  return array;
};

module.exports.plusesEverywhere = function(array) {
  return array.join('+');
};

module.exports.arrayQuantityPlusOne = function(array) {
  return array.length + 1;
};