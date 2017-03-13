'use strict';

const pow = (x, n) => {
  if (n === 1) {
    return x;
  }

  if (n === 0) {
    return 1;
  }

  let temp = pow(x, Math.floor(n / 2));

  if (n % 2 === 0) {
    return temp * temp;
  } else {
    return x * temp * temp;
  }
};

const powerOfNum = (x, n) => {
  let isNeg = false;
  let result = pow(x, n);

  if (x < 0) {
    isNeg = true;
    n *= -1;
  }

  if (isNeg) {
    return 1 / result;
  }

  return result;
};

console.log(powerOfNum(5, 5));
