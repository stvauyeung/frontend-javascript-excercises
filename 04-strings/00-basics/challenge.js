module.exports.formLetter = function(firstName, senderName, message) {
  return("Hello " + firstName + ",\n\n" + message + "\n\nSincerely,\n" + senderName);
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
 return(bigString.slice(startA,endA) + bigString.slice(startB,endB));
};

module.exports.findFirstMatch = function(text, searchString) {
  return(text.match(searchString).index);
};

module.exports.findLastMatch = function(text, searchString) {
  return(text.lastIndexOf(searchString));
};

module.exports.substringBetweenMatches = function(text, searchString) {
  var start = text.indexOf(searchString) + searchString.length;
  var end = text.lastIndexOf(searchString);
  return(text.slice(start, end));
};