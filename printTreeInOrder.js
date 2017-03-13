class Tree {
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  };

  insert (value) {
    if (this.value > value) {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = new Tree(value);
      }
    } else {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = new Tree(value);
      }
    }
  };

  printInOrder () {
    if (this.left) {
      this.left.printInOrder();
    }

    console.log(this.value);

    if (this.right) {
      this.right.printInOrder();
    }
  };
};

var tree = new Tree(100);
tree.insert(150);
tree.insert(50);
tree.insert(175);
tree.insert(25);
tree.insert(125);
tree.insert(75);
tree.insert(145);
tree.insert(55);
tree.printInOrder();
