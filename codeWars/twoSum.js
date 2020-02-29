/* Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).
*/

function twoSum(numbers, target) {
  const memo = {};
  for (let i = 0; i < numbers.length; i++) {
    let curNum = numbers[i];
    if (curNum > target) continue;
    if (!memo[curNum]) {
      if (memo[target - curNum]) {
        return [memo[target - curNum].idx, i];
      } else {
        memo[curNum] = { diff: target - curNum, idx: i };
      }
    } else if (memo[curNum].diff === curNum) return [memo[curNum].idx, i];
  }
}
