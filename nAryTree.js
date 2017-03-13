'use strict'

var NAryTree = function (val) {
  this.val = val;
  this.children = {};
};

NAryTree.prototype.insert = function (val) {
  this.children[val] = new NAryTree(val);
};

var BinTree = function (val) {
  this.val = val;
  this.left = null;
  this.right = null;
};

var nAryToBinTree = function (root, queue, direction) {
  var newRoot = new BinTree(root.val);
  var queue = queue || [];
  var newQueue = [];
  var direction = direction || 'right';
  var directions = {
    'left': 'right',
    'right': 'left'
  };
  
  for (var child in root.children) {
    newQueue.push(root.children[child]);
  }
  if (newQueue.length > 0) {
    var firstChild = newQueue.pop();
    newRoot[directions[direction]] = nAryToBinTree(firstChild, newQueue, directions[direction]);
  }
  if (queue.length > 0) {
    var nextChild = queue.pop();
    newRoot[direction] = nAryToBinTree(nextChild, queue, direction)
  }
  
  return newRoot;
};

var nTree = new NAryTree(5);
nTree.insert(15)
nTree.insert(20);
nTree.insert(10);
nTree.children[15].insert(11);
nTree.children[15].insert(12);
nTree.children[15].insert(13);
nTree.children[15].children[12].insert(5);
nTree.children[15].children[12].insert(6);
nTree.children[15].children[12].insert(4);
console.log(JSON.stringify(nTree));

console.log('narytobintree:', JSON.stringify(nAryToBinTree(nTree)));