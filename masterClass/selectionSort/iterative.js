let selectSort = function (arr) {
  let slowIdx = 0;
  let minIdx = slowIdx;
  let minVal = arr[slowIdx];
  let fastIdx = 1;
  let foundSmaller = false;
  while (slowIdx < arr.length) {
    console.log({ minVal });
    while (fastIdx < arr.length) {
      let fastVal = arr[fastIdx];
      if (fastVal < minVal) {
        minVal = fastVal;
        minIdx = fastIdx;
        foundSmaller = true;
      }
      fastIdx++;
    }
    if (foundSmaller) {
      let temp = arr[slowIdx];
      arr[slowIdx] = arr[minIdx];
      arr[minIdx] = temp;
    }
    slowIdx++;
    minIdx = slowIdx;
    minVal = arr[slowIdx];
    fastIdx = slowIdx + 1;
  }
  return arr;
};
