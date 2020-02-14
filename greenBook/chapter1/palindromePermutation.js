/*

Given a string, write a function to check if it is a permutation of a palindrome. Does not need to be limited to dictionary words. Ignore casing and non-letter characters.
Input: 'tactcoa'
Output: true ('tacocat', 'atcocta' etc)

*/

const isPalPerm = function(string) {
  // create list
  const list = {};
  // loop through string and memoize letters & their frequency in list.
  for (letter of string) {
    if (!list[letter]) list[letter] = 1;
    else list[letter]++;
  }
  // list needs to have one odd number at most.
  // use flag when encountering first odd num:
  let singleOdd = true;
  // loop through list to check for odd nums.
  for (let letter in list) {
    if (list[letter] % 2 !== 0) {
      if (singleOdd === true) singleOdd = false;
      else return false;
    }
  }
  return true;
};

/*
time = O(n);
space = O(n);
*/
