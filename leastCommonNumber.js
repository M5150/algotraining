var leastCommonNumber = function (array1, array2, array3) {
  var i = 0, j = 0, k = 0;
  while ((array1[i] !== array2[j] || array2[j] !== array3[k]) &&
  array1[i] &&
  array2[j] &&
  array3[k]) {
    if (array1[i] < array2[j]) {
      i++;
    }
    if (array1[i] < array3[k]) {
      i++;
    }
    if (array2[j] < array1[i]) {
      j++;
    }
    if (array2[j] < array3[k]) {
      j++;
    }
    if (array3[k] < array1[i]) {
      k++;
    }
    if (array3[k] < array2[j]) {
      k++;
    }
  }
  if (array1[i] === array2[j] === array3[k]) {
    return array1[i];
  } else {
    return null;
  }
};

var arr1 = [-3, 4, 8, 11, 14, 250], arr2 = [-88, -77, -55, -20, 0, 4], arr3 = [11, 14, 250, 300];
console.log(leastCommonNumber(arr1, arr2, arr3));
