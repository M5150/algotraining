// var productAllOtherIndexes = function (array) {
//   var results = [];
  
//   for (var i = 0; i < array.length; i++) {
//     var accum = null;
//     for (var j = 0; j < array.length; j++) {
//       if (i !== j) {
//         if (accum === null) {
//           accum = array[j];
//         } else {
//           accum *= array[j];
//         }
//       }
//     }
//     results.push(accum);
//   }
  
//   return results;
// };

var productAllOtherIndexes = function (array) {
  var solutions = [];
  var productSoFar = 1;
  var productBefore = 1;
  
  for (var i = array.length - 1, j = 0; i >= 0; i--, j++) {
    solutions[i] = productSoFar;
    productSoFar *= array[i];
    if (solutions[j] !== undefined) {
      solutions[j] *= productBefore;
    }
    productBefore *= array[j];
  }

  return solutions
};

console.log(productAllOtherIndexes([1, 2, 6, 5, 9]));