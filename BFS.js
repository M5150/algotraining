class Tree {
  constructor (val) {
    this.val = val || null;
    this.left = null;
    this.right = null;
  };

  addChild (val) {
    if (val < this.val) {
      if (!this.left) {
        this.left = new Tree(val);
      } else {
        this.left.addChild(val);
      }
    }

    if (val > this.val) {
      if (!this.right) {
        this.right = new Tree(val);
      } else {
        this.right.addChild(val);
      }
    }

    if (val === this.val) {
      throw(new Error('Error! Value already exists within tree!'));
    }
  };

  breadthFirstArray () {
    const arr = [];
    const queue = [this];
    let currNode;

    while (queue.length > 0) {
      currNode = queue.shift();
      arr.push(currNode.val);

      if (currNode.left) {
        queue.push(currNode.left);
      }

      if (currNode.right) {
        queue.push(currNode.right);
      }
    }

    return arr;
  };

  breadthFirstSearch (filter) {
    const queue = [];

    while (queue.length > 0) {
      currNode = queue.shift();
      if (filter(currNode)) {
        return currNode;
      }

      if (currNode.left) {
        queue.push(currNode.left);
      }

      if (currNode.right) {
        queue.push(currNode.right);
      }
    }

    return null;
  };

  depthFirstArray () {
    var arr = [];

    if (this.left) {
      arr.push(...this.left.depthFirstArray());
    }

    if (this.right) {
      arr.push(...this.right.depthFirstArray());
    }

    return arr;
  };

  depthFirstSearch (filter) {
    let result = null;

    if (filter(this)) {
      result = this;
    }

    if (this.left && !result) {
      result = this.left.depthFirstSearch(filter);
    }

    if (this.right && !result) {
      result = this.right.depthFirstSearch(filter);
    }

    return result;
  };

  inOrderArray () {
    var arr = [];

    if (this.left) {
      arr.push(...this.left.inOrderArray());
    }

    arr.push(this.val);

    if (this.right) {
      arr.push(...this.right.inOrderArray());
    }

    return arr;
  };

  inOrderSearch (filter) {
    let result = null;

    if (this.left) {
      result = this.left.inOrderSearch(filter);
    }

    if (filter(this) && !result) {
      result = this;
    }

    if (this.right && !result) {
      result = this.right.inOrderSearch(filter);
    }

    return result;
  };
};

var tree = new Tree(100);
tree.addChild(50);
tree.addChild(150);
tree.addChild(25);
tree.addChild(175);
tree.addChild(75);
tree.addChild(125);
console.log(tree.breadthFirstArray());
console.log(tree.inOrderArray());
console.log(tree.inOrderSearch(function (item) {
  return item.val === 50;
}));
