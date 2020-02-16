const arr = [
  'p',
  'e',
  'r',
  'f',
  'e',
  'c',
  't',
  '  ',
  'm',
  'a',
  'k',
  'e',
  's',
  '  ',
  'p',
  'r',
  'a',
  'c',
  't',
  'i',
  'c',
  'e'
];

function reverseWords(arr) {
  const reversedArr = arr.reverse();
  // loop through reversed array with pointers
  // when you reach a space, mirror everything before the space.
  let wordStart = 0;
  let wordEnd = null;
  let middleOfWord = true;
  for (let i = 0; i < reversedArr.length; i++) {
    // cases when we hit a space:
    // end of a word
    // sequence of spaces
    // how do we tell them apart?
    // a flag set to true, flips to false upon first encountering a space.
    // if then we hit a space and the flag is false, we know to not do anything.
    // if we hit a space and the flag is true, this is where if flips to false and the word flips too.
    if (reversedArr[i] === '  ') {
      // check the flag. if it's true, we've just hit the first space after a word.
      if (middleOfWord === true) {
        wordEnd = i - 1;
        mirrorReverse(reversedArr, wordStart, wordEnd);
        middleOfWord = false;
      }
    } else if (!middleOfWord) {
      middleOfWord = true;
      wordStart = i;
    } else if (i === reversedArr.length - 1 && middleOfWord) {
      wordEnd = i;
      mirrorReverse(reversedArr, wordStart, wordEnd);
    }
  }
  return reversedArr;
}

const mirrorReverse = function(arr, wordStart, wordEnd) {
  while (wordStart <= wordEnd) {
    let temp = arr[wordStart];
    arr[wordStart] = arr[wordEnd];
    arr[wordEnd] = temp;
    wordStart++;
    wordEnd--;
  }
};

reverseWords(arr);
