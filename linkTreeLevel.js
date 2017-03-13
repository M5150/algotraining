class BinaryTree {
  constructor (val) {
    this.val = val;
    this.left = null;
    this.right = null;
  };

  insertNode (val) {
    if (val === this.val) {
      return;
    } else if (val <= this.val) {
      if (this.left === null) {
        this.left = new BinaryTree(val);
      } else {
        this.left.insertNode(val);
      }
    } else {
      if (this.right === null) {
        this.right = new BinaryTree(val);
      } else {
        this.right.insertNode(val);
      }
    }
  };

  connectSameLevelSiblings () {
    var currentNode = this;
    var pointerNode = null;
    var prevNode = null;
    currentNode.next = null;

    while (currentNode) {
      if (currentNode.left) {
        if (!pointerNode) {
          pointerNode = currentNode.left;
        }

        if (prevNode) {
          prevNode.next = currentNode.left;
        }

        prevNode = currentNode.left;
      }

      if (currentNode.right) {
        if (!pointerNode) {
          pointerNode = currentNode.right;
        }

        if (prevNode) {
          prevNode.next = currentNode.right;
        }

        prevNode = currentNode.right;
      }

      if (!currentNode.next) {
        if (prevNode) {
          prevNode.next = null;
        }

        currentNode = pointerNode;
        pointerNode = null;
        prevNode = null;
      } else {
        currentNode = currentNode.next;
      }
    }
  }
};

var tree = new BinaryTree(100);
tree.insertNode(50);
tree.insertNode(150);
tree.insertNode(75);
tree.insertNode(125);
tree.insertNode(25);
tree.insertNode(175);
tree.connectSameLevelSiblings();
console.log(tree);
