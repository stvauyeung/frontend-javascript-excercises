module.exports.getKeys = function(object) {
  var returnArray = [];
  for (var key in object) {
    returnArray.push(key);
  };
  return returnArray;
};

module.exports.getValues = function(object) {
  var returnArray = [];
  for (var i in object) {
    returnArray.push(object[i]);
  };
  return returnArray;
};

module.exports.objectToArray = function(object) {
  var returnArray = [];
  for (var i in object) {
    returnArray.push(i + " is " + object[i]);
  };
  return returnArray;
};