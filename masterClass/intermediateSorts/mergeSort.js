// first implement a func responsible for merging two sorted arrays: given two sorted arrays, this func outputs a sorted array containing all elements together.
// const arrTwo = [2, 14, 99, 100];
// const arrOne = [1, 10, 14, 50, 75]; //[]
let mergeArrs = function (arrOne, arrTwo) {
  // Create an empty array that you'll return at the end.
  let mergedArr = [];

  let onePointer = 0;
  let twoPointer = 0;

  // Take a look at the smallest values in each input array.

  while (onePointer < arrOne.length && twoPointer < arrTwo.length) {
    // While there are still values we haven't looked at, take the value of the first item in each array and compare them.
    // Put the smaller item in the result array, and move to the next item in the first array.
    if (arrOne[onePointer] < arrTwo[twoPointer]) {
      mergedArr.push(arrOne[onePointer]);
      onePointer++;
    } else if (arrOne[onePointer] > arrTwo[twoPointer]) {
      mergedArr.push(arrTwo[twoPointer]);
      twoPointer++;
    } else {
      // I chose to separate out the case of equality because I think it saves us a bit of time. This way, if the two minimum values are equal, we only compare them to each other. If we had included equality in one of the other options, after comparing them once and finding that they're equal, we would only take one of them, and then have to compare the other. This is unnecessary.
      mergedArr.push(arrOne[onePointer], arrTwo[twoPointer]);
      onePointer++;
      twoPointer++;
    }
  }
  // Once we exhaust one array, push the rest of the values from the other array into the return array.
  if (onePointer < arrOne.length) {
    mergedArr.push(...arrOne.slice(onePointer));
  } else if (twoPointer < arrTwo.length) {
    mergedArr.push(...arrTwo.slice(twoPointer));
  }
  return mergedArr;
};
// Space complexity: O(n + m)
// Time complexity: O(n + m)

// Break up an array into halves until you have arrays that are empty or have one element. So from 0 to middle of the array, and middle of array to end.
// Then merge the small arrays back together until you're back at the full length of the array.
const mergeSort = function (unsortedArr) {
  // base case - if the array passed in has only 1 or no elements
  // if (unsortedArr.length < 2) return ;
  // recursive case - break the array into two and call this func again on the two halves
  if (unsortedArr.length < 2) return unsortedArr;
  let middle = Math.floor(unsortedArr.length / 2);
  let left = mergeSort(unsortedArr.slice(0, middle));
  let right = mergeSort(unsortedArr.slice(middle));
  // every array is going to keep splitting; each of them will evaluate eventually into a single element, at which point we can keep running down the code and return the result of merging these two arrays from the mergeArrs helper.
  // but at that point, we are only taking the top call off the stack; we now have to evaluate several more calls that are still there - the rest of the splitting and merging. This way, our left array may have evaluated to [1, 100] after returning from the merge called on [100] and [1], but our right array is just now returning with [10] from splitting all the right side arrays. These two can then go on to get merged together, returning as a merged array, and then merging with the next evaluated split and so on.
  return mergeArrs(left, right);
};
// Space complexity: O(n)
// Time complexity: O(n log n) - because we need to split each array log n times, and then merge them together, which is O(n) for each of our calls to mergeArr function.
