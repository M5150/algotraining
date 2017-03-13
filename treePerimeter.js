var printPerimeter = function (root) {
  var result = [];
  
  var addLeftSide = function (node) {
    result.push(node.val);
    
    if (node.left !== null) {
      addLeftSide(node.left);
    } else if (node.right !== null) {
      addLeftSide(node.right);
    }
  };
  
  var addLeaves = function (node) {
    if (node.left !== null) {
      addLeaves(node.left);
    }
    if (node.right !== null) {
      addLeaves(node.right);
    }
    if (node.right === null && node.left === null) {
      result.push(node.val);
    }
  };
  
  var addRightSide = function (node, stack) {
    stack.push(node.val);
    
    if (node.right !== null) {
      addRightSide(node.right, stack);
    } else if (node.left !== null) {
      addRightSide(node.left, stack);
    } else {
      for (var i = stack.length - 2; i >= 0; i--) {
        result.push(stack[i]);
      }
    }
  };
  
  if (!root) {
    return null;
  } else {
    result.push(root.val);
    addLeftSide(root.left);
    
    if (result.length > 1) {
      result.pop();
    }
    
    addLeaves(root);
    addRightSide(root.right, []);
    
    return result;
  }
};

//             1
//         2       3
//      5        4
//         9   13 10
//             4 43

var testTree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 5,
      left: null,
      right: {
        val: 9,
        left: null,
        right: null
      }
    },
    right: null
  },
  right: {
    val: 3,
    left: {
      val: 4,
      left: {
        val: 13,
        left: {
          val: 4,
          left: null,
          right: null
        },
        right: {
          val: 43,
          left: null,
          right: null
        }
      },
      right: {
        val: 10,
        left: null,
        right: null
      }
    },
    right: null
  }
};

console.log(printPerimeter(testTree));