var mergeSort = function (array) {
  if (array.length === 1) {
    return array;
  }
  
  var resultLeft = [];
  var resultRight = [];
  var result = [];
  var middle = Math.ceil(array.length / 2);
  
  resultLeft.push(mergeSort(array.slice(0, middle)));
  resultRight.push(mergeSort(array.slice(middle, array.length)));
  result = buildOrderedArray(resultLeft[0], resultRight[0]);
  
  return result;
};

var buildOrderedArray = function (left, right) {
  var i = 0, j = 0;
  var result = [];
  
  while (i !== left.length || j !== right.length) {
    if (left[i] <= right[j] || right[j] === undefined) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  
  return result;
};

console.log(mergeSort([5,3,7,10,15,2034,29,38,13,100,1,-5,11,43]));