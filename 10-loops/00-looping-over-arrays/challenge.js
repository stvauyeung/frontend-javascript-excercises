module.exports.sumNumbers = function(array) {
  var sumOfArray = 0;
  for ( var i in array ) {
    sumOfArray = sumOfArray + array[i];
  };
  return sumOfArray;
};

module.exports.splitAndLowerCaseString = function(string) {
  var returnArray = string.split(',');
  for (var i in returnArray) {
    returnArray[i] = returnArray[i].toLowerCase();
  };
  return returnArray;
};

module.exports.addIndex = function(array) {
  var returnArray = [];
  for (var i in array) {
    returnArray.push(array.indexOf(array[i]) + " is " + array[i]);
  };
  return returnArray;
};
