/* given an array of ints, find the largest sub-array formed by consecutive ints. The subarray should contain all distinct values.

Check each separate possible subarray. Is it consecutive? If so, check its length. Keep track of the longest. Remember to check if numbers repeat themselves.
*/

const longestConsecutiveSub = function (
  array,
  startSubIdx = 0,
  endSubIdx = array.length - 1,
  curMaxSub = []
) {
  console.log({ startSubIdx, endSubIdx, curMaxSub });
  // edge case: startSubIdx is at the end
  if (startSubIdx >= array.length - 1) return curMaxSub;
  // edge case: endSubIdx meets with startSubIdx
  if (startSubIdx >= endSubIdx)
    return longestConsecutiveSub(
      array,
      ++startSubIdx,
      array.length - 1,
      curMaxSub
    );
  let curSub = array.slice(startSubIdx, endSubIdx);
  // create a set out of cur Sub
  let checkDupes = new Set(curSub);
  // check if the length of the set is equal to the length of the sub
  // if it isn't, there are duplicates in the sub, so it's invalid - move on to the next set
  if (checkDupes.size === curSub.length) {
    // assuming all nums are > -1, if there are no dupes and the biggest num is the length of the array - 1, the rest of the nums have to be consequtive.
    const biggestNum = Math.max(...curSub);
    if (biggestNum === curSub.length - 1) {
      // ok so we're consecutive; are we the longest? if we are, let's replace the curMaxSub element before we keep checking.
      if (curSub.length > curMaxSub.length) curMaxSub = curSub;
    }
  }
  return longestConsecutiveSub(array, startSubIdx, --endSubIdx, curMaxSub);
};

console.log(longestConsecutiveSub([2, 0, 2, 1, 4, 3, 1, 0]));
