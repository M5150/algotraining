var largestSumSubArray = function (sumArray) {
  var currentMax = sumArray[0];
  var globalMax = sumArray[0];
  
  for (var i = 0; i < sumArray.length; i++) {
    if (currentMax < 0) {
      currentMax = sumArray[i];
    } else {
      currentMax += sumArray[i];
    }
    if (currentMax > globalMax) {
      globalMax = currentMax;
    }
  }
  
  return globalMax;
};

var testArray1 = [-1, -4, 3, 7, 11, -20, 5, 7, -3, 2, 3, 5, 8, 10, 9, -4, -3, -6, 6];
console.log(largestSumSubArray(testArray1));

var testArray2 = [-4, 2, -5, 1, 2, 3, 6, -5];
console.log(largestSumSubArray(testArray2));
