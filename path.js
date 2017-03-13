// This is the text editor interface.
// Anything you type or change here will be seen by the other person in real time.

Given a 2D map find the shortest distance from the starting point to the finish
point. You can only move horizontally or vertically. You cannot leave the
boundaries of the map.

Open spaces are represented by .
Walls are represented by x
Points are represented as (row, col) where (0,0) is top left corner

Eg:

Map:

. . .
x x .
. . .

Start point: (0,0)
End point: (2,0)

Shortest path length: 6

var map = [['.', '.', '.'], ['x', 'x', '.'], ['.', '.', '.']]

var findShortestPath = function (start, end, map) {
    var prevCoords = {};
    var distance = 0;

    while (start !== end) {
        if (isValidPosition(map, [start[0 + 1], start[1]])) {
            if (prevCoords[start[0 + 1] + ',' + start[1]]) {
                distance--;
                // { TODO: move back to previous position, and move in different direction }
            } else {
                distance++;
            }
            prevCoords[start[0 + 1] + ',' + start[1]] = start;
            start = [start[0 + 1], start[1]];
        } else if (isValidPosition(map, [start[0], start[1 + 1]])) {
            if (prevCoords[start[0] + ',' + start[1 + 1]]) {
                distance--;
            } else {
                distance++;
            }
            prevCoords[start[0] + ',' + start[1 + 1]] = start;
            start = [start[0], start[1 + 1]];
        } else if (isValidPosition(map, [start[0], start[1 - 1]])) {
            start = [start[0], start[1 - 1]];
            if (prevCoords[start[0] + ',' + start[1 - 1]]) {
                distance--;
            } else {
                distance++;
            }
            prevCoords[start[0] + ',' + start[1 - 1]] = start;
            start = [start[0], start[1 - 1]];
        } else if (isValidPosition(map, [start[0 - 1], start[1]])) {
            if (prevCoords[start[0 - 1] + ',' + start[1]]) {
                distance--;
            } else {
                distance++;
            }
            prevCoords[start[0 - 1] + ',' + start[1]] = start;
            start = [start[0 - 1], start[1]];
        }
    }

    return distance;
};

var isValidPosition = function (map, coord) {
    if (coord[0] >= 0 && coord[0] < map.length) {
        if (coord[1] >= 0 && coord[1] < map[0].length) {
            if (map[coord[0]][coord[1]] !== 'x') {
                return true;
            }
        }
    }
};
