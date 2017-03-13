var singleton = (function () {
  var instance;
  class Singleton {
    constructor (value) {
      this.value = value;
    }
  };

  return {
    getInstance(constructor) {
      return instance;
    },

    setInstance(constructor) {
      if (!instance) {
        instance = new constructor();
      }

    },
  };
})();

class Observable {
  constructor () {
    this.reactionsTo = {};
    return this;
  };

  on (event, callback) {
    this.reactionsTo[event] = this.reactionsTo[event] || [];
    this.reactionsTo[event].push(callback);
  };

  trigger (event) {
    var args = [].slice.call(arguments, 1);

    for (var i = 0; i < this.reactionsTo[event].length; i++) {
      this.reactionsTo[event][i].apply(this, args);
    }
  };

  off (event) {
    if (!arguments.length) {
      obj.reactionsTo = {};
    }
  };
};

class Factory {
  constructor (obj, factoryMethod) {
    this.factoryMethod.bind(obj);
    return this;
  };

  static factoryMethod () {
  };
};

class foo {
  constructor (val) {
    this.bar = val;
  }
}

singleton.setInstance(foo.bind(null, 23));
var a = singleton.getInstance();
var b = singleton.getInstance();
console.log(a, b);

var obj = new Observable({ name: 'Alice', age: 30 });
obj.on('ageChange', function () { // On takes an event name and a callback function
  console.log('Age changed');
  console.log(arguments);
});

obj.age++;
obj.age++;
obj.trigger('ageChange', 123); // This should call our callback! Should log 'age changed'.

var x = new Factory(obj)