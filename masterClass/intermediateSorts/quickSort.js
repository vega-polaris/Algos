/* pivot helper
given an array, this func designates an element as a pivot and rearranges the elements so that all elements smaller than pivot are on the left, all the bigger are on the right. The specific order on either side doesn't matter.
This should be done IN PLACE, and returns the new index of the pivot.
How do we pick pivot? We would like to choose the median value of the data, but since we don't know the contents of the array, we have to have other solutions. For this pseudo-code, we'll choose the first element as a pivot. */

//  Accept three args: array, start index, end index.
const pivotHelper = function (array, startIdx = 0, endIdx = array.length) {
  //Store current pivot in a var (which will keep track of where the pivot should end up).
  let swapIdx = 0;
  let pivotElement = array[startIdx];
  let swapped = false;
  // Loop through array (from start to end).
  for (let i = startIdx + 1; i < endIdx; i++) {
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
  console.log({ arrayFromSwap: array });
};

pivotHelper([4, 1, -3, 70, 34, 9, 2]);
