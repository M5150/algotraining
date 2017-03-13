var createListOfNumbers = function (stringNum) {
  var result = [];

  var innerFn = function (num, nums) {
    nums = nums || [];
    if (num.length === 0) {
      result.push(nums);
      return;
    }

    for (var i = 1; i < num.length + 1; i++) {
      innerFn(num.substring(i), nums.concat(parseInt(num.substring(0, i))));
    }
  };

  innerFn(stringNum);

  return result;
};

var stringToMath = function (string, total) {
  var splittedString = string.split(' ');
  var operations = {
    '+': {
      precedence: 2,
      operation: function (a, b) {
        return a + b;
      },
    },

    '-': {
      precedence: 2,
      operation: function (a, b) {
        return a - b;
      },
    },

    '*': {
      precedence: 1,
      operation: function (a, b) {
        return a * b;
      },
    },

    '/': {
      precedence: 1,
      operation: function (a, b) {
        return a / b;
      },
    },
  };

  postFixStack = infixToPostFix(splittedString, operations);
  return postFixToValue(postFixStack, operations, total);
};

var postFixToValue = function (postFixStack, operations, total) {
  var valueStack = [];
  while (postFixStack.length > 0) {
    var shifted = postFixStack.shift();
    if (!isNaN(shifted)) {
      valueStack.push(shifted);
    } else {
      var tempB = valueStack.pop();
      var tempA = valueStack.pop();
      valueStack.push(operations[shifted].operation(tempA, tempB));
    }
  }

  return valueStack[0] === total;
};

var infixToPostFix = function (splittedString, operations) {
  var operatorStack = [];
  var outputStack = [];

  for (var i = 0; i < splittedString.length; i++) {
    if (!isNaN(splittedString[i])) {
      outputStack.push(parseInt(splittedString[i]));
    } else {
      while (operatorStack.length > 0 && operations[operatorStack[operatorStack.length - 1]].precedence <= operations[splittedString[i]].precedence) {
        outputStack.push(operatorStack.pop());
      }

      operatorStack.push(splittedString[i]);
    }
  }

  while (operatorStack.length > 0) {
    outputStack.push(operatorStack.pop());
  }

  return outputStack;
};

var operationsList = function (numList, total) {
  var result = {};

  var innerFn = function (nums, operationString) {
    var operators = [' + ', ' - ', ' * ', ' / '];
    operationString = operationString || '';

    if (nums.length === 1) {
      var stringifiedOperation = operationString + nums[0];
      if (stringToMath(stringifiedOperation, total)) {
        result[stringifiedOperation] = true;
      }

      return;
    }

    var currNum = nums.slice(0, 1);

    for (var i = 0; i < operators.length; i++) {
      var tempString = operationString + currNum + operators[i];
      innerFn(nums.slice(1), tempString);
    }
  };

  innerFn(numList);
  return Object.keys(result);
};

var numberToExpression = function (stringNum, total) {
  var result = [];
  var arr = createListOfNumbers(stringNum);
  for (var i = 0; i < arr.length; i++) {
    var res = operationsList(arr[i], total);
    if (res.length) {
      Array.prototype.push.apply(result, res);
    }
  }

  console.log(result);

  return result;
};

numberToExpression('314159265358', 27182);

// f("314159265358", 27182)
