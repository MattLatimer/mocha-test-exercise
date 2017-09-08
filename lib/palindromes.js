function isPalindrome(s) {
  var stringReverse = s.split("").reverse().join("");
  return s.split(' ').join('') == stringReverse.split(' ').join('');
}

module.exports = isPalindrome;
