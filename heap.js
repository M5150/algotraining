var BinaryHeap = function (min) {
  this._heap = [];
  this._compare = function (child, parent) {
    return min ? parent > child : child > parent;
  };
};

BinaryHeap.prototype.getRoot = function () {
  return this._heap[0];
};

BinaryHeap.prototype.calculateParentIndex = function (childIndex) {
  return Math.floor((childIndex - 1) / 2);
};

BinaryHeap.prototype.insert = function (value) {
  var index = this._heap.push(value) - 1;
  var parentIndex = this.calculateParentIndex(index);

  while (this._compare(this._heap[index], this._heap[parentIndex])) {
    var oldParent = this._heap[parentIndex];

    this._heap[parentIndex] = this._heap[index];
    this._heap[index] = oldParent;

    index = parentIndex;
    parentIndex = this.calculateParentIndex(index);
  }
};

BinaryHeap.prototype.removeRoot = function () {
  var oldHead = this.getRoot();
  this._heap[0] = this._heap[this._heap.length - 1];
  this._heap[this._heap.length - 1] = oldHead;
  this._heap.pop();

  var index = 0;
  var leftIndex = function (index) { return index * 2 + 1; };
  var rightIndex = function (index) { return index * 2 + 2; };
  var leftCompare = this._compare(this._heap[leftIndex(index)], this._heap[index]);
  var rightCompare = this._compare(this._heap[rightIndex(index)], this._heap[index]);

  while ((leftCompare || rightCompare) && this._heap[leftIndex(index)] && this._heap[rightIndex(index)]) {
    if (this._heap[leftIndex(index)] > this._heap[rightIndex(index)]) {
      var oldParent = this._heap[index];
      this._heap[index] = this._heap[rightIndex(index)];
      this._heap[rightIndex(index)] = oldParent;
      index = rightIndex(index);
    } else {
      var oldParent = this._heap[index];
      this._heap[index] = this._heap[leftIndex(index)];
      this._heap[leftIndex(index)] = oldParent;
      index = leftIndex(index);
    }
  }
};

var heap = new BinaryHeap(true);
heap.insert(10);
heap.insert(4);
heap.insert(6);
heap.insert(7);
heap.insert(17);
heap.insert(13);
heap.insert(18);
heap.insert(34);
heap.insert(22);
heap.insert(9);
heap.insert(1);
heap.insert(13);
heap.insert(16);
heap.insert(77);

heap.removeRoot();
heap.removeRoot();

heap.insert(1);
heap.insert(2);

heap.removeRoot();

console.log(heap)