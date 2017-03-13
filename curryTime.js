function curry(func) {
  var argsLength = func.length;

  return function curryTime () {
    var args = [].slice.call(arguments);
    if (args.length === argsLength) {
      return func.apply(null, args);
    }
    return function () {
      var args2 = [].slice.call(arguments);
      return curryTime.apply(this, args.concat(args2))
    }
  }
}

var add = curry(function(a, b, c) {
  return a + b + c;
});

// console.log(add()(1,2,4));
console.log(add(1)(2)(6));