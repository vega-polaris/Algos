/* function accepts a string and returns length of its longest substring with distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6

Time complexity O(n)
*/

const findLongestSubstring = function(string) {
  if (!string) return 0;
  let memo = {};
  let startIdx = 0;
  let endIdx = 0;
  let maxLength = 1;
  // loop through using endIdx.
  while (endIdx < string.length) {
    // for each letter, if it isn't memoized, memoize it and increment endIdx to move to next letter.
    if (memo[string[endIdx]] === undefined) {
      memo[string[endIdx]] = endIdx;
      endIdx++;
    } else {
      // if it's memoized already, check its length, reset memo, then assign startIdx to right after the first occurence of this character, reset endIdx to same and continue looping.
      if (endIdx - startIdx > maxLength) maxLength = endIdx - startIdx;
      startIdx = memo[string[endIdx]] + 1;
      endIdx = startIdx;
      memo = {};
    }
    if (endIdx >= string.length - 1 && endIdx - startIdx > maxLength) {
      maxLength = endIdx - startIdx;
    }
  }

  return maxLength;
};

findLongestSubstring('thisisawesome'); // 6
