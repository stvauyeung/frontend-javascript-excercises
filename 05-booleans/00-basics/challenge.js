module.exports.equalStrings = function(stringOne, stringTwo) {
  return stringOne === stringTwo;
};

module.exports.notEqual = function(one, two) {
  return one !== two;
};

module.exports.inBetween = function(lower, middle, upper) {
  return lower < middle && upper > middle;
};

module.exports.outsideRanges = function(number) {
  var returnValue = null;
  if ((10 <= number && 20 >= number) || (42 < number && 75 >= number) || (1 < number && 6 > number)) { returnValue = false } else ( returnValue = true );
  return returnValue;
};

module.exports.nameAndPrice = function(name, price) {
  var returnValue = false;
  if ((name == 'NYTimes' || name == 'LATimes') && (price >= 1)) { returnValue = true };
  return returnValue;
};