const reverseArr = (arr) => {
  for (var i = 0, j = arr.length - 1; Math.floor(i < arr.length / 2); i++, j--) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return arr;
};

console.log(reverseArr(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']));
