var Node = function (val) {
  this.data = val;
  this.neighbors = {};
};

var Edge = function (weight, toNode) {
  this.weight = weight;
  this.toNode = toNode;
};

var Graph = function () {
  this.graphSet = {};
};

Graph.prototype.addNode = function (val) {
  var newNode = new Node(val);
  this.graphSet[val] = newNode;
};

Graph.prototype.deleteNode = function (val) {
  var node = this.graphSet[val];
  for (var neighbor in node.neighbors) {
    if (node.neighbors[neighbor][val]) {
      delete node.neighbors[neighbor][val];
    }
  }
  delete node;
};

Graph.prototype.addEdge = function (fromNode, toNode, weight) {
  var weight = weight || 1;
  if (this.graphSet[fromNode] && this.graphSet[toNode]) {
    if (this.graphSet[toNode].neighbors[fromNode]) {
      this.graphSet[toNode].neighbors[fromNode].weight = weight;
    }

    var newEdge = new Edge(weight, this.graphSet[toNode]);
    this.graphSet[fromNode].neighbors[toNode] = newEdge;
  } else {
    console.error("Error, both node's do not exist");
  }
};

var newGraph = new Graph();
newGraph.addNode(5);
newGraph.addNode(10);
newGraph.addNode(4);
newGraph.addNode(3);
newGraph.addNode(1);
newGraph.addNode(6);
newGraph.addNode(7);
newGraph.addEdge(5, 7, 2);
console.log(newGraph.graphSet[5].neighbors[7].weight)
newGraph.addEdge(7, 5, 1)
console.log(newGraph.graphSet[7] === newGraph.graphSet[5].neighbors[7].toNode);
console.log(newGraph.graphSet[5].neighbors[7].weight, newGraph.graphSet[7].neighbors[5].weight)
console.log(newGraph);
