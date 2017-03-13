var compose = function(){
  var args = Array.prototype.slice.call(arguments);
  args.reverse();
  return pipe.apply(null, args);
};

var pipe = function(){
  var args = Array.prototype.slice.call(arguments);
  return args.reduce(function(acc, currFn) {
    return function() {
      return currFn(acc.apply(null, arguments));
    };
  });
};

var add2 = function(number) {
  return number + 2;
};
var multiplyBy3 = function(number) {
  return number * 3;
};
pipe(add2, multiplyBy3)(5) // 21
pipe(add2, multiplyBy3, multiplyBy3)(5) // 63