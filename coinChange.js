var coinChange = function (denominations, total) {
  var results = [];
  
  results.length = total + 1;
  results.fill(0);
  
  results[0] = 1;
  
  for (var i = 0; i < denominations.length; i++) {
    for (var j = denominations[i]; j < total + 1; j++) {
      results[j] += results[j - denominations[i]]; 
    }
  }
  return results[results.length - 1];
};

console.log(coinChange([1, 2, 5], 7));