class LRUCache {
  constructor (limit) {
    this._hash = {};
    this._limit = limit || 10;
    this.size = 0;
    this._list = new List();
  };

  setItem (key, value) {
    if (this._hash[key]) {
      const node = this._hash[key];
      node.value = value;
      node.moveToHead();
      return node;
    } else {
      this.size++;
      const node = this._list.unshift(value);
      this._hash[key] = node;

      if (this.size > this._limit) {
        this.prune();
      }

      return node;
    }
  };

  getItem (key) {
    if (this._hash[key]) {
      const node = this._hash[key];
      this._list.moveToHead(node);
      return node;
    }
  };

  deleteItem (key) {
    if (this._hash[key]) {
      const node = this._hash[key];
      this._list.moveToTail(node);
      this._list.pop();
    }
  };

  prune () {
    this._list.pop();
    this.size--;
  };

  printAll () {
    for (let node in this._hash) {
      console.log(this._hash);
    }
  };

  forEach (callback) {
    for (let node in this._hash) {
      callback(this._hash[node], node, this._hash[node].value);
    }
  };
};

class List {
  constructor () {
    this.head = null;
    this.tail = null;
  };

  unshift (value) {
    var node = {
      value: value,
      prev: null,
      next: null,
    };

    this.moveToHead(node);
    return this.head;
  };

  pop () {
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      const temp = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
      return temp;
    }
  };

  moveToHead (node) {
    if (this.head !== this.tail) {
      this.head.prev = node;
      node.next = this.head;
      node.prev = null;
      this.head = node;
    } else if (this.head !== null) {
      const temp = this.head;
      temp.prev = node;
      node.next = temp;
      node.prev = null;
      this.head = node;
    } else {
      this.head = this.tail = node;
    }
  };

  moveToTail (node) {
    if (this.head !== this.tail) {
      this.tail.next = node;
      node.next = null;
      node.prev = this.tail;
      this.tail = node;
    } else if (this.tail !== null) {
      const temp = this.tail;
      temp.next = node;
      node.prev = temp;
      node.next = null;
      this.tail = node;
    } else {
      this.head = this.tail = node;
    }
  };
};

var test = new LRUCache(3);
test.setItem('abc', 123);
test.setItem('xyz', 456);
test.setItem('jfk', 999);
test.printAll();
test.setItem('qwe', 343);
test.setItem('qwe3', 343);
test.setItem('qwed', 343);
test.setItem('fdt', 555);
test.printAll();
test.getItem('jfk');

