'use strict';

class Trie {
  constructor (letter, word) {
    this.val = letter || null;
    this.word = word || null;
    this.children = {};
  };

  addLetter(letter, word) {
    if (this.children[letter] && !word) {
      return this.children[letter];
    } else if (this.children[letter] && word) {
      return this.children[letter].word = word;
    }

    const child = new Trie(letter, word);
    this.children[letter] = child;
    return child;
  };

  addWord (word) {
    let newNode = this;

    for (var ch = 0; ch < word.length; ch++) {
      if (ch === word.length - 1) {
        newNode = newNode.addLetter(word[ch], word);
      } else {
        newNode = newNode.addLetter(word[ch]);
      }
    }
  };

  getWords () {
    var results = [];

    for (const child in this.children) {
      const words = this.children[child].getWords();
      if (this.val === null) {
        results.push(...words);
      } else {
        for (var i = 0; i < words.length; i++) {
          words[i] = this.val + words[i];
        }

        results.push(...words);
      }
    }

    if (this.word) {
      results.push(this.val);
    }

    return results;
  };
};

const trie = new Trie();
trie.addWord('abcdeg');
trie.addWord('abcdegfes');
trie.addWord('xsdfef');
console.log(JSON.stringify(trie));
console.log(JSON.stringify(trie.getWords()));

const findWords = (board, words) => {
  const results = {};
  const trie = new Trie();

  for (let word of words) {
    trie.addWord(word);
  }

  const isValidCoordinate = (boardPosition) => {
    if (boardPosition[1] >= 0 && boardPosition[1] < board[0].length) {
      if (boardPosition[0] >= 0 && boardPosition[0] < board.length) {
        return true;
      }
    }
  };

  const adjacentPositions = (currPos, prevPos) => {
    const moveSet = {};

    let position = [currPos[0] - 1, currPos[1]]; // move up
    if (isValidCoordinate(position)) {
      let move = `${currPos[0] - 1},${currPos[1]}`;
      if (!prevPos[move]) {
        moveSet[move] = {
          letter: board[currPos[0] - 1][currPos[1]],
          position: position,
        };
      }
    }

    position = [currPos[0], currPos[1] + 1]; // move right
    if (isValidCoordinate(position)) {
      let move = `${currPos[0]},${currPos[1] + 1}`;
      if (!prevPos[move]) {
        moveSet[move] = {
          letter: board[currPos[0]][currPos[1] + 1],
          position: position,
        };
      }
    }

    position = [currPos[0] + 1, currPos[1]]; // move down
    if (isValidCoordinate(position)) {
      let move = `${currPos[0] + 1},${currPos[1]}`;
      if (!prevPos[move]) {
        moveSet[move] = {
          letter: board[currPos[0] + 1][currPos[1]],
          position: position,
        };
      }
    }

    position = [currPos[0], currPos[1] - 1]; // move left
    if (isValidCoordinate(position)) {
      let move = `${currPos[0]},${currPos[1] - 1}`;
      if (!prevPos[move]) {
        moveSet[move] = {
          letter: board[currPos[0]][currPos[1] - 1],
          position: position,
        };
      }
    }

    return moveSet;
  };

  const nextPosition = (currPos) => {
    if (isValidCoordinate([currPos[0], currPos[1] + 1])) {
      let nextPos = currPos.slice();
      nextPos[1] += 1;
      return nextPos;
    } else if (isValidCoordinate([currPos[0] + 1, 0])) {
      let nextPos = currPos.slice();
      nextPos[1] = 0;
      nextPos[0] += 1;
      return nextPos;
    }
  };

  const innerFn = (currPos, prevPos, trieNode) => {
    if (trieNode.children[board[currPos[0]][currPos[1]]] && !trieNode.val) {
      trieNode = trieNode.children[board[currPos[0]][currPos[1]]];
    }

    if (trieNode.word) {
      results[trieNode.word] = trieNode.word;
    }

    let moveSet = adjacentPositions(currPos, prevPos);

    prevPos[`${currPos[0]},${currPos[1]}`] = currPos;

    for (const move in moveSet) {
      let letter = moveSet[move].letter;
      let position = moveSet[move].position;

      if (trieNode.children[letter]) {
        innerFn(position, Object.assign({}, prevPos), trieNode.children[letter]);
      }
    }
  };

  let currPos = [0, 0];
  while (currPos) {
    innerFn(currPos, {}, trie);
    let nextPos = nextPosition(currPos);
    currPos = nextPos;
  }

  return Object.keys(results);
};

const board = [
  ['o', 'a', 'a', 'n'],
  ['e', 't', 'a', 'e'],
  ['i', 'h', 'k', 'r'],
  ['i', 'f', 'l', 'v'],
];

const board2 = [['a', 'b'], ['a', 'a']];
const wordList2 = ['aba', 'baa', 'bab', 'aaab', 'aaa', 'aaaa', 'aaba']; // ["aaa", "aaab", "aaba", "aba", "baa"]
const wordList = ['pea', 'oath', 'eat', 'rain'];
console.log(findWords(board2, wordList2));
