var conditionInput = function (string) {
  var result = '#';

  for (var i = 0; i < string.length; i++) {
    result = result + string[i] + '#';
  }

  return result;
};

var longestPalindrome = function (string) {
  string = conditionInput(string);
  var results = {};
  var longestPal = string[1];
  var palTemp = '';
  var maxLength = 1;
  var array = [];
  var right = -1;
  var center = -1;

  for (var i = 0; i < string.length; i++) {
    if (i < right) {
      array[i] = Math.min(array[2 * center - i], right - i);
    } else {
      array[i] = 0;
    }

    while (string[i - array[i] - 1] === string[i + array[i] + 1] && string[i - array[i] - 1] && string[i - array[i] + 1]) {
      array[i] = array[i] + 1;
      if (string[i - array[i] - 1] !== '#' && array[i] === 1) {
        palTemp = string[i];
      } else if (string[i - array[i] - 1] === '#' && string[i + array[i] + 1] === '#' && array[i] === 1) {
        palTemp = string[center] + string[center];
      } else if (string[i + array[i]] !== '#' && string[i + array[i]]) {
        palTemp = string[i + array[i]] + palTemp + string[i + array[i]];
      }

      results[palTemp] = true;

      if (array[i] > maxLength) {
        maxLength = array[i];
        longestPal = palTemp;
      }
    }

    if (i + array[i] > right) {
      right = i + array[i];
      center = i;
    }
  }

  return Object.keys(results);
};

console.log(longestPalindrome('racecarasdf'));
