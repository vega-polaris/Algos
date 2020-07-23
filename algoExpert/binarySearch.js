function binarySearch(array, target, startIdx = 0, endIdx = array.length - 1) {
  // base case 1: the starting pointer has surpassed the ending pointer - we've gone through the whole array
  // base case 2: there's still one element to look at.
  if (
    endIdx - startIdx < 0 ||
    (endIdx - startIdx === 0 && array[startIdx] !== target)
  )
    return -1;
  if (endIdx - startIdx === 0 && array[startIdx] === target) return startIdx;
  // find the middle of the array:
  const midIdx = Math.floor((endIdx - startIdx) / 2) + startIdx; //
  const midEl = array[midIdx]; //
  // control flow for middle element compared to target
  // if middle element = target, return index
  if (midEl === target) return midIdx;
  // if middle element < target, re-call this func on the right side of the array
  if (midEl < target) return binarySearch(array, target, midIdx + 1); //
  // if middle element > target, re-call this func on the left side of the array
  if (midEl > target) return binarySearch(array, target, startIdx, midIdx);
}

const array = [1, 5, 23, 111];
const target = 111;

console.log(binarySearch(array, target));
