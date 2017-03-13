var LinkedList = function () {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.push = function (val) {
  var node = new ListNode(val);
  if (this.head === null) {
    this.head = node;
    this.tail = this.head;
  } else {
    var temp = this.tail;
    temp.next = node;
    this.tail = node;
  }
};

LinkedList.prototype.pop = function () {
  var result = null;
  if (this.head !== null) {
    var currNode = this.head;
    
    while (currNode) {
      currNode = currNode.next;
      
      if (currNode.next.next === null) {
        break;
      }
    }
    
    result = this.tail.val;
    this.tail = currNode;
    this.tail.next = null;
  }
  return result;
};

LinkedList.prototype.shift = function () {
  var result = null;
  if (this.head !== null && this.head !== this.tail) {
    result = this.head.val;
    this.head = this.head.next;
    console.log(this.head, result);
  } else {
    result = this.head;
    this.head = null;
  }
  return result;
};

LinkedList.prototype.unshift = function (val) {
  var node = new ListNode(val);
  if (this.head === null) {
    this.head = node;
    this.tail = this.head;
  } else {
    var temp = this.head;
    node.next = temp;
    this.head = node;
  }
};
var count = 0;

var reverseLinkedListRecursive = function (node) {
  count++
  if (!node || !node.next) {
    return node;
  }
  console.log(count, node.val, node.next.val);
  
  var reversed = reverseLinkedListRecursive(node.next);
  node.next.next = node;
  console.log(count, node.val, node.next.val);
  node.next = null;
  return reversed;
};

var reverseLinkedListIterative = function (node) {
  if (!node || !node.next) {
    return node;
  }
 
  var nextNode = node.next;
  node.next = null;
  
  while (nextNode) {
    var temp = nextNode.next;
    nextNode.next = node;
    node = nextNode;
    nextNode = temp;
  }
  
  return node;
};

// var reverseLinkedListIterative = function (node) {
//   if (!node || !node.next) {
//     return node;
//   }
 
//   var nextNode = node.next;
//   var reversedNode = node;
//   reversedNode.next = null;
  
//   while (nextNode) {
//     var temp = nextNode;
//     nextNode = nextNode.next;
//     temp.next = reversedNode;
//     reversedNode = temp;
//   }
  
//   return reversedNode;
// };

var ListNode = function (val) {
  this.val = val;
  this.next = null;
};

var list = new LinkedList();
list.push(1);
list.push(4);
list.push(5);
list.push(9);
// console.log(list);
// console.log(list.pop());
// console.log(list);
list.push(11);
list.push(13);
list.push(49);
// console.log(list.shift());
console.log(JSON.stringify(list.head));

console.log(JSON.stringify(reverseLinkedListIterative(list.head)));