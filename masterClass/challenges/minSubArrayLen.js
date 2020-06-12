const minSubarrayLen = function(intArr, targetInt) {
  // curSum var
  // store beginning and ending idxs
  let startIdx = 0;
  let endIdx = 0;
  let curSum = intArr[0];
  while (curSum < targetInt) {
    endIdx++;
    curSum += intArr[endIdx];
    if (!curSum) return 0;
  }
  let minLen = endIdx - startIdx + 1;
  // this should put curSum at (or just over) target.
  // then drop first element. If curSum is small, add next element
  while (endIdx < intArr.length) {
    if (intArr[startIdx] > targetInt || intArr[endIdx] > targetInt) return 1;
    curSum -= intArr[startIdx];
    startIdx++;
    if (curSum < targetInt) {
      endIdx++;
      curSum += intArr[endIdx];
    } else if (endIdx - startIdx < minLen) {
      minLen = endIdx - startIdx + 1;
    }
  }

  return minLen;
};
