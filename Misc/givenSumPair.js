/* Given an unsorted array of nums and a sum, find a pair of nums that add up to given sum and return their indexes.

Sample input: ([2, 7, 3, 1, 7, 4], 10)
Sample output: [1, 2] or [2, 4]

*/

const sampleArr = [2, 7, 1, 7, 4];
const sampleSum = 10;

// naive approach - nested loop
const givenSumPair = function (numArr, sum) {
  let foundIdx = [];
  numArr.forEach((firstNum, idx) => {
    for (let i = idx + 1; i < numArr.length; i++) {
      if (firstNum + numArr[i] === sum) foundIdx = [idx, i];
    }
  });
  return foundIdx;
};

// naive approach - recursive
const givenSumPair = function (numArr, sum, curIdx = 0, found = []) {
  if (numArr.length < 2 || found.length > 1) return found;
  let curFirstNum = numArr[0];
  numArr.forEach((secondNum, idx) => {
    if (curFirstNum + secondNum === sum) {
      found.push(curIdx, curIdx + idx);
    }
  });
  return givenSumPair(numArr.slice(1), sum, ++curIdx, found);
};

// sort first
const givenSumPair = function (numArr, sum) {
  let sortedArr = numArr.slice().sort((a, b) => a - b);
  let leftPointIdx = 0;
  let rightPointIdx = numArr.length - 1;
  while (leftPointIdx < rightPointIdx) {
    if (sortedArr[leftPointIdx] + sortedArr[rightPointIdx] == sum) {
      return [
        numArr.indexOf(sortedArr[leftPointIdx]),
        numArr.indexOf(sortedArr[rightPointIdx]),
      ];
    } else if (sortedArr[leftPointIdx] + sortedArr[rightPointIdx] < sum) {
      ++leftPointIdx;
    } else {
      --rightPointIdx;
    }
  }
};

//memoization iterative
const givenSumPair = function (numArr, sum) {
  const list = {};
  for (let i = 0; i < numArr.length; i++) {
    let num = numArr[i];
    let soughtNum = sum - num;
    if (list[soughtNum]) return [list[soughtNum], i];
    else if (!list[num]) list[num] = i;
  }
};

// memoization recursive
const givenSumPair = function (
  numArr,
  sum,
  list = {},
  pointer = 0,
  foundPair = []
) {
  if (pointer >= numArr.length) return foundPair;
  let num = numArr[pointer];
  let soughtNum = sum - num;
  console.log({ list, num, soughtNum });
  if (list[soughtNum]) return [list[soughtNum], pointer];
  else {
    list[num] = pointer;
    return givenSumPair(numArr, sum, list, ++pointer, foundPair);
  }
};

console.log(givenSumPair(sampleArr, sampleSum));
