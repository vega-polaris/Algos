function titleCase(title, minorWords) {
  if (title.length < 1) return title;
  // split both arrays
  const titleArr = title.split(' ');
  const minorArr = minorWords
    ? minorWords.split(' ').map((word) => word.toLowerCase())
    : [];
  // map through remaining words
  return titleArr
    .map((word, idx) => {
      // if this is the first word or the word isn't in the minorWords array, map it - first letter capitalized
      if (idx === 0 || !minorArr.includes(word.toLowerCase()))
        return `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`;
      // otherwise return as is
      else return word.toLowerCase();
    })
    .join(' ');
}

console.log('empty string', titleCase('', ''));
console.log('KINGS', titleCase('a clash of KINGS', 'a an the of')); //, 'A Clash of Kings');
console.log('wind', titleCase('THE WIND IN THE WILLOWS', 'The In')); //, 'The Wind in the Willows'));
console.log('fox', titleCase('the quick brown fox')); //'The Quick Brown Fox'));
