/* function takes two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.

isSubsequence('hello', 'hello world') -> true
isSubsequence('sing', 'string') -> true
isSubsequence('abc', 'abracadabra') -> true
isSubsequence('abc', 'acb') -> false

solution must have at least:
Time O(n + m)
Space O(1)

*/

const isSubsequence = function (substring, string) {
  let substrPointer = 0;
  let strPointer = 0;
  while (substrPointer < substring.length) {
    if (substring[substrPointer] === string[strPointer]) {
      substrPointer++;
      strPointer++;
    } else if (strPointer >= string.length) {
      return false;
    } else {
      strPointer++;
    }
  }
  return true;
};

isSubsequence('abc', 'acb');
