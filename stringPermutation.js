var stringPermutation = function (string, permutation, arr, length) {
  length = length || string.length;
  
  if (permutation.length < length) {
    for (var i = 0; i < string.length; i++) {
      var temp = string.slice(0, i) + string.slice(i + 1);
      stringPermutation(temp, permutation + string[i], arr, length);
    }
  } else {
    return arr.push(permutation);
  }
  return arr;
};

console.log(JSON.stringify(stringPermutation('abcd', '', [])));