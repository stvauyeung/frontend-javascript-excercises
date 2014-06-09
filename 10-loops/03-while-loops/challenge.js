module.exports.stream = function(conditionalFn, actionFn) {
  var conditionalState = conditionalFn()
  while (conditionalState == true) { 
    actionFn();
    conditionalState = conditionalFn();
  };
};

module.exports.sumNumbers = function(array) {
  var returnValue = 0;
  while (array.length > 0) {
    returnValue += array.pop();
  };
  return returnValue;
};

