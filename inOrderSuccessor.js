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
test1.insert(1);
test1.insert(3);
test1.insert(-5);
test1.insert(6);

var inOrderSuccessor = function (root, target, successor) {
  if (!root) {
    return null;
  }
  
  if (root.val < successor && root.val > target || !successor) {
    successor = root.val;
  }
  
  if (target < root.val && root.left) {
    return inOrderSuccessor(root.left, target, successor);
  } else if (target >= root.val && root.right) {
    return inOrderSuccessor(root.right, target, successor);
  }
  if (!root.left && !root.right) {
    if (successor <= target) {
      return null;
    }
    return successor;
  }
};

console.log(inOrderSuccessor(test1, 50, null))