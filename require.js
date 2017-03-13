var require = function (file, tree) {
  for (var require in file) {
    tree[require.name] = require(require, {});
  }
  
  return tree;
};

var file = [
  {
    name: 'level1',
    require: [
      
    ]
  },
  {
    name: 'level2',
    require: [
      {
        name: 'level2a',
        require: dependencies[a]
      }
    ]
  }
]

var dependencies = {
  a: 'asdf',
  b: 'asdf',
  c: 'asdf',
  d: 'asdf'
}

console.log()