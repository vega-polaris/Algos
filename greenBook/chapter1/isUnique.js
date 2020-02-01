/* implement an algo to determine if a string has all unique characters. */

// additional data structures allowed:
const isUnique = str => {
  const isThere = {};
  for (let letter of str) {
    if (!isThere[letter]) isThere[letter] = true;
    else return false;
  }
  return true;
};

// additional data structures not allowed:
const isUniqueSmaller = str => {
  for (let slowPointer = 0; slowPointer < str.length; slowPointer++) {
    for (
      let fastPointer = slowPointer + 1;
      fastPointer < str.length;
      fastPointer++
    ) {
      if (str[slowPointer] === str[fastPointer]) return false;
    }
  }
  return true;
};
