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

var test1 = new BinaryTree(15)
test1.insert(7);
test1.insert(22);
test1.insert(12);
test1.insert(5);
test1.insert(50);
test1.insert(17);