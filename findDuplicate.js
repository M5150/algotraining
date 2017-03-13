var findDuplicate = function (arr) {
  var low = 1;
  var high = arr.length - 1;
  
  while (low < high) {
    var lCount = 0;
    var rCount = 0;
    var mCount = 0;
    var middle = Math.floor(low + (high - low) / 2);
    
    for (var i = low - 1; i <= high; i++) {
      if (low <= arr[i] && arr[i] < middle) {
        ++lCount;
      } else if (middle < arr[i] && arr[i] <= high) {
        ++rCount;
      } else if (arr[i] === middle) {
        ++mCount;
      }
    }
    
    if (low === middle) return rCount > lCount ? low : high;
    lCount >= rCount ? high = middle - 1: low = middle + 1;
  }
};

var testArray = [4, 3, 2, 4, 1];
console.log(findDuplicate(testArray));