function createSpiral(n) {
  var results = [];
  var count = 1;
  var bounds = {
    top: 0,
    bottom: n - 1,
    left: 0,
    right: n - 1,
  };

  for (var h = 0; h < n; h++) {
    results.push([]);
  }

  while (count <= n * n) {
    for (var i = bounds.left; i <= bounds.right; i++) {
      results[bounds.top][i] = count++;
    }

    bounds.top++;

    for (var j = bounds.top; j <= bounds.bottom; j++) {
      results[j][bounds.right] = count++;
    }

    bounds.right--;

    for (var k = bounds.right; k >= bounds.left; k--) {
      results[bounds.bottom][k] = count++;
    }

    bounds.bottom--;

    for (var l = bounds.bottom; l >= bounds.top; l--) {
      results[l][bounds.left] = count++;
    }

    bounds.left++;
  }

  return results;
}

console.log(createSpiral(5));
