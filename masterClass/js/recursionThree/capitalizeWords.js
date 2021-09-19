/* given an array of words, return the same array with all the words capitalized. 

*/

function capitalizeWords(wordArr) {
  return wordArr.map(word => capHelper(word));
}

function capHelper(word) {
  let capWord = '';
  if (word.length < 1) return capWord;
  capWord += word[0].toUpperCase();
  return (capWord += capHelper(word.slice(1)));
}

let words = ['i', 'am', 'learning', 'recursion'];
capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
