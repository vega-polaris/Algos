const subArraySum = (intArr, n) => {
  let max = -Infinity;
  let startWindow = 0;
  let endWindow = n;
  let arrSlice = intArr.slice(startWindow, endWindow);
  while (arrSlice.length >= n) {
    let curMax = arrSlice.reduce((acc, num) => acc + num);
    max = curMax > max ? curMax : max;
    startWindow++;
    endWindow++;
    arrSlice = intArr.slice(startWindow, endWindow);
  }
  return max;
};

/*
 * REFACTORED TO USE SLIDING WINDOW
 */

const subArraySumRefac = (intArr, n) => {
  let startIdx = 0;
  let endIdx = n - 1;
  let maxSum = intArr
    .slice(startIdx, endIdx + 1)
    .reduce((acc, num) => acc + num);
  let tempSum = maxSum;
  while (endIdx + 1 <= intArr.length) {
    startIdx++;
    endIdx++;
    tempSum = tempSum - intArr[startIdx - 1] + intArr[endIdx];
    if (tempSum > maxSum) maxSum = tempSum;
  }
  return maxSum;
};
