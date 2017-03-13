var Node = function (val) {
  this.data = val;
  this.neighbors = {};
  this.visited = false;
};

var Edge = function (weight, toNode) {
  this.weight = weight;
  this.toNode = toNode;
  this.visited = false;
};

var Graph = function () {
  this.graphSet = {};
};

Graph.prototype.addNode = function (val) {
  var newNode = new Node(val);
  this.graphSet[val] = newNode;
  return newNode;
};

Graph.prototype.deleteNode = function (val) {
  var node = this.graphSet[val];
  for (var neighbor in node.neighbors) {
    delete this.graphSet[neighbor].neighbors[val];
  }
  delete node;
};

Graph.prototype.addEdge = function (fromNode, toNode, weight) {
  var weight = weight || 1;
  if (this.graphSet[fromNode] && this.graphSet[toNode]) {
    var newToEdge = new Edge(weight, toNode);
    var newFromEdge = new Edge(weight, fromNode);
    this.graphSet[fromNode].neighbors[toNode] = newToEdge;
    this.graphSet[toNode].neighbors[fromNode] = newFromEdge;
  } else {
    console.error("Error, both node's do not exist");
  }
};

var newGraph = new Graph();
newGraph.addNode(1);
newGraph.addNode(2);
newGraph.addNode(3);
newGraph.addNode(4);
newGraph.addNode(5);
newGraph.addNode(6);
newGraph.addNode(7);
newGraph.addNode(8);
newGraph.addEdge(1, 2, 4);
newGraph.addEdge(2, 3, 4);
newGraph.addEdge(3, 4, 4);
newGraph.addEdge(4, 5, 4);
newGraph.addEdge(5, 6, 4);
newGraph.addEdge(6, 7, 4);
newGraph.addEdge(3, 8, 2);
newGraph.addEdge(5, 2, 2);
newGraph.addEdge(1, 3, 82);
newGraph.addEdge(8, 1, 1);
newGraph.addEdge(6, 4, 13);
newGraph.addEdge(4, 7, 12);
newGraph.addEdge(1, 7, 12);
newGraph.addEdge(3, 8, 12);
newGraph.addEdge(2, 4, 12);
newGraph.addEdge(6, 8, 12);
var nodes = [];
var minimumSpanningTree = function (graph, node, numNodes, count, weight) {
  if (!node) {
    return null;
  }

  var smallest = null;

  if (count <= numNodes) {
    for (var neighbor in node.neighbors) {
      var currEdge = node.neighbors[neighbor];
      if (!currEdge.toNode.visited && !currEdge.visited) {
        smallest = currEdge;
        break;
      }
    }

    for (var neighbor in node.neighbors) {
      var currEdge = node.neighbors[neighbor];
      if (!currEdge.visited) {
        if (node.visited && !graph[currEdge.toNode].visited && currEdge.weight < smallest.weight) {
          smallest = currEdge;
        }
      }
    }

    nodes.push(smallest.toNode);
    smallest.visited = true;
    graph[smallest.toNode].neighbors[node.data].visited = true;
    graph[smallest.toNode].visited = true;
    return minimumSpanningTree(graph, graph[smallest.toNode], numNodes, count + 1, weight + smallest.weight);
  } else {
    return weight;
  }
};

var graphNodes = Object.keys(newGraph.graphSet);
var firstNode = newGraph.graphSet[graphNodes[0]];
firstNode.visited = true;
console.log(graphNodes.length);
console.log(minimumSpanningTree(newGraph.graphSet, firstNode, graphNodes.length, 1, 0));