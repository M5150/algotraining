var makeColumnsRowsZero = function (matrix) {
  var zeroRows = {};
  var zeroColumns = {};
  var results = [];

  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        zeroRows[i] = i;
        zeroColumns[j] = j;
      }
    }
  }
  
  for (var k = 0; k < matrix.length; k++) {
    results[k] = [];
    for (var l = 0; l < matrix[k].length; l++) {
      results[k].push((zeroRows.hasOwnProperty(k) || zeroColumns.hasOwnProperty(l)) ? 0 : matrix[k][l])
    }
  }
  
  return results;
};

var testArray = [[1, 2, 5, 0], [5, 3, 2, 4], [0, 1, 3, 2], [1, 1, 1, 1]];

console.log(makeColumnsRowsZero(testArray));