var removeDuplicates = function (array) {
  array = array.sort(function (a, b) {
    return a - b;
  });
  
  for (var insertion = 0, start = 0, end = 0; start < array.length; end++) {
    if (array[start] !== array[end]) {
      array[insertion] = array[start];
      start = end;
      insertion++;
    }
  }
  array.length = insertion;
  return array;
};

console.log(removeDuplicates([1,1,1,1,2,2,2,2,3,3,3,3,2,2,2]));

