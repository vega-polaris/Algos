function countUniqueValues(sortedArr) {
  if (sortedArr.length < 1) return 0;
  let count = 1;
  let slowIdx = 0;
  let fastIdx = 1;

  while (fastIdx < sortedArr.length) {
    if (sortedArr[slowIdx] === sortedArr[fastIdx]) {
      fastIdx++;
    } else {
      count++;
      slowIdx = fastIdx;
      fastIdx++;
    }
  }
  return count;
}
