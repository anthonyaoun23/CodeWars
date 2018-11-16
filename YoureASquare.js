// https://www.codewars.com/kata/youre-a-square/train/javascript

var isSquare = function(n) {
  var square = Math.sqrt(n);
  if (square % 1 != 0) {
    return false;
  }
  return true;
};
