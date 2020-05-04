bubbleSort = (arr) => {
  let swapped = false;
  for (let i = arr.length; i > -1; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) return arr;
  }
  return arr;
};

const swap = function (arr, firstIdx, secondIdx) {
  let temp = arr[firstIdx];
  arr[firstIdx] = arr[secondIdx];
  arr[secondIdx] = temp;
};

bubbleSort([2, 2, 2, 1, 5, 12213132, 34343, 556, 123]);
