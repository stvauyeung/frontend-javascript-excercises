module.exports.copy = function(object) {
  var newObj = {}
  for (var i in object) {
    newObj[i] = object[i];
  };
  return newObj;
};

module.exports.extend = function(objOne, objTwo) {
  for (var i in objTwo) {
    objOne[i] = objTwo[i];
  };
  return objOne;
};

module.exports.hasElems = function(object, array) {
  var nonKeyCount = 0;
  for (var i in array) {
    if (object.hasOwnProperty(array[i])) {
      nonKeyCount += 0
    } else { nonKeyCount++ };
  };
  if (nonKeyCount > 0) { return false } else { return true };
};