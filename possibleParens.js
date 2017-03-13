var possibleParens = function (num) {
  var results = [];
  
  (function parens (input, right, left) {
    if (left < num) {
      parens(input + '{', right, left + 1);
    }
    if (right < left) {
      parens(input + '}', right + 1, left);
    }
    if (right === num && left === num) {
      results.push(input);
    }
  })('', 0, 0);
  
  return results;
};

console.log(possibleParens(4))