/* merge two sorted arrays in place:

input: [1, 4, 7, 8, 10], [2, 3, 9]
output: [1, 2, 3, 4, 7], [8, 9, 10]

*/

// swap elements between arrays
const swap = function (leftArr, leftIdx, rightArr, rightIdx) {
  const temp = leftArr[leftIdx];
  leftArr[leftIdx] = rightArr[rightIdx];
  rightArr[rightIdx] = temp;
};
// check if rightArr[0] is still in the right place
const reSort = function (rightArr) {
  let pointer = 0;
  while (rightArr[pointer] > rightArr[pointer + 1]) {
    swap(rightArr, pointer, rightArr, pointer + 1);
    pointer++;
  }
};

const mergeSorted = function (leftArr, rightArr) {
  // iterate through left array
  leftArr.forEach((num, idx) => {
    // for each number, compare it to the smallest of rightArr.
    // if l < r, don't do anything - we can move on.
    // if r > l, swap the numbers, then re-organize the right array.
    if (num > rightArr[0]) {
      swap(leftArr, idx, rightArr, 0);
      reSort(rightArr);
    }
  });
  return [leftArr, rightArr];
};

const leftArr = [1, 4, 7, 8];
const rightArr = [2, 3, 6, 9, 12, 18];

mergeSorted(leftArr, rightArr);
