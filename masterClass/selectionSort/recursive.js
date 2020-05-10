const selectSort = function (unsortedArr, sortedArr = []) {
  // base case
  if (!unsortedArr.length) return sortedArr;
  // recursive case
  let minIdx = 0;
  let minVal = unsortedArr[0];
  let i = 1;
  while (i < unsortedArr.length) {
    let curVal = unsortedArr[i];
    if (curVal < minVal) {
      minVal = curVal;
      minIdx = i;
    }
    i++;
  }
  sortedArr.push(minVal);

  return selectSort(
    [...unsortedArr.slice(0, minIdx), ...unsortedArr.slice(minIdx + 1)],
    sortedArr
  );
};
