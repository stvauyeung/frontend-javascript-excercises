module.exports.createCourse = function(title, duration, students) {
  return {
    title: title,
    duration: duration,
    students: students
  };
};

module.exports.addProperty = function(object, newProp, newValue) {
  if ( object.hasOwnProperty(newProp) != true ) {
    object[newProp] = newValue;
  };
  return object;
};

module.exports.formLetter = function(letter) {
  return "Hello " + letter['recipient'] + ",\n\n" + letter['msg'] + "\n\nSincerely,\n" + letter['sender'];
};

module.exports.canIGet = function(item, money) {
  var prices = {
    'MacBook Air': 999,
    'MacBook Pro': 1299,
    'Mac Pro': 2499,
    'Apple Sticker': 1
  };

  return prices[item] <= money;
};