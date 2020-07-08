/* Given an array of ints, return true if a subarray exists whose sum is 0.

Sample input: [3, 4, -7, 3, 1, 3, 1, -4, -2, -2]
Sample output: true
3 + 4 - 7 = 0, so [3, 4, -7] is a subarray with sum 0.
4, -7, 3 = 0, so this too.

*/

const isSubarrayZero = function (array) {
  // create list of all sums
  const allSums = {};
  let sum = 0;
  for (let num of array) {
    // keep incrementing/decrementing the sum
    sum += num;
    // check the allSums object. If the current sum already exists, then the elements in between these two sums amount to zero!
    if (allSums[sum]) return true;
    // if the sum doesn't exist, add it in.
    else allSums[sum] = true;
  }
  // you've gone through the whole array without finding a single duplicate sum - there are no 0-sum subarrays.
  return false;
};

const array = [3, 4, -7, 3, 1, 3, 1, -4, -2, -2];
isSubarrayZero(array);
