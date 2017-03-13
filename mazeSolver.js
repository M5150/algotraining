'use strict';

class Node {
  constructor (value, count) {
    this.value = value;
    this.neighbors = {};
    this.count = count || Infinity;
    this.visited = false;
  };
};

class Edge {
  constructor (fromNode, toNode, count) {
    this.fromNode = fromNode;
    this.toNode = toNode;
    this.count = count || Infinity;
    this.visited = false;
  };
};

class Graph {
  constructor () {
    this.graphSet = {};
  };

  addNode (value) {
    const newNode = new Node(value);
    this.graphSet[value] = newNode;
    return newNode;
  };

  addEdge (fromNode, toNode) {
    console.log(fromNode, toNode);
    var count = Math.min(this.graphSet[fromNode].count, this.graphSet[toNode].count);
    const fromEdge = new Edge(this.graphSet[fromNode], this.graphSet[toNode], count);
    const toEdge = new Edge(this.graphSet[toNode], this.graphSet[fromNode], count);
    this.graphSet[fromNode].neighbors[toNode] = fromEdge;
    this.graphSet[toNode].neighbors[fromNode] = toEdge;
  };
};

class Maze extends Graph {
  constructor (map, start, end, wallChar, emptyChar) {
    super();
    this.hashSet = {};
    this.map = map;
    this.start = start;
    this.end = end;
    this.wallChar = wallChar;
    this.emptyChar = emptyChar;
  };

  mapSize () {
    return ([this.map.length, this.map[0].length]);
  };

  addPositions () {
    const queue = [this.start];
    let currPosition = null;

    while (queue.length) {
      currPosition = queue.shift();
      this.hashSet[currPosition] = true;
      this.addNode(currPosition);
      queue.push(...this.availableMoves(currPosition));
    }
  };

  availableMoves (position) {
    return this.directions(position).filter((coord) => {
      return this.validMoveCheck(position, coord);
    });
  };

  directions (position) {
    return ([
      [position[0] - 1, position[1]],
      [position[0] + 1, position[1]],
      [position[0], position[1] - 1],
      [position[0], position[1] + 1],
    ]);
  };

  validMoveCheck (rootPosition, position) {
    if (position[0] >= 0 && position[0] < this.mapSize()[0]) {
      if (position[1] >= 0 && position[1] < this.mapSize()[1]) {
        if (this.map[position[0]][position[1]] === this.emptyChar) {
          if (!this.hashSet[position]) {
            return true;
          } else {
            this.addEdge(rootPosition, position);
            // this.hashSet[position].count = this.hashSet[rootPosition].count + 1;
          }
        }
      }
    }
  };

  shortestPath () {
    let currentPosition = null;
    const stack = [this.graphSet[this.start]];

    while (currentPosition !== this.graphSet[this.end]) {
      if (!currentPosition) {
        currentPosition = stack.pop();
        currentPosition.count = 0;
      } else {
        currentPosition = stack.pop();
      }

      currentPosition.visited = true;
      currentPosition.count = this.neighborCount(currentPosition);

      if (currentPosition === this.graphSet[this.end]) {
        return currentPosition.count;
      }

      this.markVisited(currentPosition);
      stack.push(...this.nextPositions(currentPosition));
    }
  };

  neighborCount ({ neighbors, count }) {
    let minCount = Infinity;

    for (var neighbor in neighbors) {
      minCount = Math.min(minCount, neighbors[neighbor].count, count);
    }

    return minCount;
  };

  markVisited ({ value, neighbors, count }) {
    for (var neighbor in neighbors) {
      neighbors[neighbor].toNode.neighbors[value].visited = true;
      neighbors[neighbor].toNode.neighbors[value].count = count + 1;
      neighbors[neighbor].visited = true;
      neighbors[neighbor].count = count + 1;
    }
  };

  nextPositions ({ neighbors }) {
    let results = [];

    for (var neighbor in neighbors) {
      if (!neighbors[neighbor].toNode.visited) {
        results.push(neighbors[neighbor].toNode);
      }
    }

    return results;
  };
};

var solveMaze = (map, start, end) => {
  const maze = new Maze(map, start, end, 'X', 'O');
  maze.addPositions();
  return maze.shortestPath();
};

const maze = [
  ['O', 'O', 'X', 'O', 'O', 'O'],
  ['X', 'O', 'O', 'O', 'X', 'O'],
  ['O', 'O', 'X', 'X', 'X', 'O'],
  ['X', 'O', 'O', 'O', 'X', 'O'],
  ['X', 'O', 'O', 'O', 'X', 'O'],
  ['O', 'O', 'X', 'O', 'O', 'O'],
];

console.log(solveMaze(maze, [0, 0], [5, 0]));
