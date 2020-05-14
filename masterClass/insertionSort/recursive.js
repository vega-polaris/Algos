const insertSort = function (arr, sortedBy = 0) {
  if (sortedBy >= arr.length) return arr;
  let curIdx = sortedBy + 1;
  let insertSpot = sortedBy;
  let foundSmaller = false;
  while (arr[curIdx] < arr[insertSpot]) {
    insertSpot--;
    foundSmaller = true;
  }
  if (foundSmaller) {
    arr.splice(insertSpot + 1, 0, arr.splice(curIdx, 1)[0]);
    return insertSort(arr, sortedBy + 1);
  } else return insertSort(arr, sortedBy + 1);
};

insertSort(arr);
