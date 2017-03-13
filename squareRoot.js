var squareRoot = function (num, low, high) {
  var low = low || 0;
  var mid = (low + high) / 2;
  var high = high || 1 + num / 2;
  var square = mid * mid;
  var diff = Math.abs(square - num);
  
  if (diff < .0000000000000001) {
    return mid;
  } else if (square > num) {
    return squareRoot(num, low, mid);
  } else {
    return squareRoot(num, mid, high);
  }
};

console.log(squareRoot(250000));