const findMissing = (array) => {
  const total = array.reduce((accum, curr) => accum + curr);
  const expectedTotal = (array.length + 1) * (((array.length + 1) / 2) + .5);
  return expectedTotal - total;
};

const arr = [1, 2, 3, 4, 5, 7, 8];
console.log(findMissing(arr));
