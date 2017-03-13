var mergeSorted = function (arr1, arr2) {
  var results = [];
  var i = 0;
  var j = 0;
  
  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] >= arr2[j] || arr1[i] === undefined) {
      results.push(arr2[j]);
      j++;
    } else {
      results.push(arr1[i]);
      i++;
    }
  }
  
  return results;
};

var array1 = [1, 3, 5, 7, 9, 10];
var array2 = [2, 4, 6, 8, 10];
console.log(mergeSorted(array1, array2));