const paragraph =
  'If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50.';

const removeString = (string) => {
  let longestString = '';
  // split into words and loop through array.
  const wordsArr = string.split(' ');
  for (let i = 0; i < wordsArr.length; i++) {
    let curString = wordsArr[i] + ' ';
    let nextWordIdx = i + 1;
    // while paragraph length - current word length > 50, add the next word and reassign the next-word pointer
    while (
      string.length - (curString.length + ' ') > 50 &&
      nextWordIdx < wordsArr.length
    ) {
      curString += wordsArr[nextWordIdx] + ' ';
      nextWordIdx++;
    }
    // back in the loop - if the current longest string is shorter than new longest string, reassign.
    if (longestString.length < curString.length) {
      longestString = curString;
    }
  }
  return longestString;
};

removeString(paragraph);
