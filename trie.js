'use strict';

export default class Trie {
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