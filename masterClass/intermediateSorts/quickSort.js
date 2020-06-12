//  Accept three args: array, start index, end index.
const pivotHelper = function (array, startIdx = 0, endIdx = array.length) {
  //Store current pivot in a var (which will keep track of where the pivot should end up).
  let swapIdx = startIdx;
  let pivotElement = array[startIdx];
  // Loop through array (from start to end).
  for (let i = startIdx + 1; i < endIdx + 1; i++) {
    let element = array[i];
    // If pivot is greater than current element, increment the pivot index variable and swap current element with element at pivot index
    if (pivotElement > element) {
      swapIdx++;
      swap(array, swapIdx, i);
    }
  }
  swap(array, swapIdx, startIdx);
  // return new pivot index
  return swapIdx;
};

const swap = function (array, idx1, idx2) {
  // swap the starting element (i.e. the pivot) with the pivot index.
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
};

const quickSort = function (array, startIdx = 0, endIdx = array.length - 1) {
  // base case - start and end indexes are meeting
  if (startIdx < endIdx) {
    // recursive case
    // find our first swap spot
    let swapIdx = pivotHelper(array, startIdx, endIdx);
    // do the whole thing on the left side of the array till swap spot
    quickSort(array, startIdx, swapIdx);
    // do the same thing on the right side of the array
    quickSort(array, swapIdx + 1, endIdx);
  }
  return array;
};
