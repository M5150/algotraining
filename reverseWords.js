var reverseWords = function (sentence) {
  if (!sentence || sentence.length === 0) {
    return null;
  }

  var splitSentence = sentence.split('');
  var revS = splitSentence.reverse();
  var start = 0;
  var end = 0;

  while (end < revS.length) {
    if (revS[start] === ' ') {
      start++;
      end++;
    }

    if (revS[end] !== ' ' && end !== revS.length - 1) {
      end++;
    }

    if (revS[end] === ' ' && revS[start] !== ' ' || end === revS.length - 1) {
      var revW = revS.slice(start, end + 1).reverse();

      if (end !== revS.length - 1) {
        revS = revS.slice(0, start - 1).concat(revW.concat(revS.slice(end, revS.length)));
      } else {
        revS = revS.slice(0, start).concat(revW);
      }

      start = end += 1;
    }
  }

  return revS.join('');
};

console.log(reverseWords('Hello Dear World!  '));