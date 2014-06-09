module.exports.favoriteNumber = function(fav, guess) {
  if ( guess < fav ) { 
    return 'Too low';
  } else if ( guess > fav ) {
    return 'Too high';
  } else if ( guess == fav ) {
    return 'You got it!';
  };
};

module.exports.checkLock = function(a, b, c, d) {
  if ((a == 3 || a == 5 || a == 7) && (b ==2) && (5 <= c && 100>= c) && (9 > d || 20 < d)) {
    return 'correct';
  } else { 
    return 'incorrect';
  };
};

module.exports.canIGet = function(item, money) {
  var items = ['MacBook Air', 'MacBook Pro', 'Mac Pro', 'Apple Sticker'];
  var canBuy = false;
  if (items.indexOf(item) != -1) {
    if (item == 'MacBook Air' && money >= 999) {
      canBuy = true;
    } else if (item == 'MacBook Pro' && money >= 1299) {
      canBuy = true;
    } else if (item == 'Mac Pro' && money >= 2499) {
      canBuy = true;
    } else if (item == 'Apple Sticker' && money >= 1) {
      canBuy = true;
    };
  };
  return canBuy;
};