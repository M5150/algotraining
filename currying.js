function curry(func, args, context) {
  var numArgs = func.length - args.length; //arguments still to come
  var savedAccum = Array.prototype.slice.apply(args); // saved accumulator array

  function accumulator(moreArgs, savedAccum, numArgs) {
    var savedAccumPrev = savedAccum.slice(0); // to reset
    var numArgsPrev  = numArgs; // to reset
    for (var i = 0; i < moreArgs.length; i++, numArgs--) {
      savedAccum[savedAccum.length] = moreArgs[i];
    }

    if ((numArgs - moreArgs.length) <= 0) {
      var res = func.apply(context, savedAccum);
      // reset vars, so curried function can be applied to new params.
      savedAccum = savedAccumPrev;
      numArgs  = numArgsPrev;
      return res;
    } else {
      return function () {
        // arguments are params, so closure bussiness is avoided.
        return accumulator(arguments, savedAccum.slice(0), numArgs);
      };
    }
  }
  return accumulator([], savedAccum, numArgs);
}

function add(a ,b ,c) {
  if (arguments.length < add.length) {
    return curry(add, arguments, this);
  }

  return a + b + c;
}

// console.log(add()(1,2,4));
console.log(add(1)(2)(6));
