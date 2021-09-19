/* given a sorted arr of ints, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair.

BONUS CONSTRAINTS:
Time O(n)
Space O(1)

averagePair([1, 2, 3], 2.5) -> true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) -> true
averagePair([-1, 0, 3, 4, 5, 6], 4.1) -> false
averagePair([], 4) -> false

*/

const averagePair = function(numsArr, targetAv) {
  let startIdx = 0;
  let endIdx = numsArr.length - 1;

  while (startIdx < endIdx) {
    let curAv = avOfTwo(numsArr[startIdx], numsArr[endIdx]);
    if (curAv === targetAv) return true;
    if (curAv < targetAv) startIdx++;
    else endIdx--;
  }

  return false;
};

function avOfTwo(numOne, numTwo) {
  return (numOne + numTwo) / 2;
}

averagePair([], 4);
