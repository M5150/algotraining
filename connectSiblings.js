var BinaryTree = function (val) {
  this.val = val;
  this.left = null;
  this.right = null;
};

BinaryTree.prototype.insert = function (val) {
  if (val === this.val) {
    return;
  } else if (val <= this.val) {
    if (this.left === null) {
      this.left = new BinaryTree(val);  
    } else {
      this.left.insert(val);
    }
  } else {
    if (this.right === null) {
      this.right = new BinaryTree(val);  
    } else {
      this.right.insert(val);
    }
  }
};

var connectSiblings = function (root) {
  var nodeArray = [root];
  
  while (nodeArray.length > 0) {
    if (nodeArray[0].left) {
      nodeArray.push(nodeArray[0].left);
    }
    if (nodeArray[0].right) {
      nodeArray.push(nodeArray[0].right);
    }
    nodeArray.shift().next = nodeArray[0];
  }
};

var test1 = new BinaryTree(15)
test1.insert(7);
test1.insert(22);
// test1.insert(12);
// test1.insert(5);
// test1.insert(50);
// test1.insert(17);
// test1.insert(20);
// test1.insert(14);
// test1.insert(11);
// test1.insert(13);
// test1.insert(27);

console.log(JSON.stringify(test1))
connectSiblings(test1);
console.log('\n', JSON.stringify(test1.left));
