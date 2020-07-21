/* Given a binary array, sort it in constant time and space. The output should contain all 0's followed by all 1's.

Sample input: [1, 0, 1, 0, 1, 0, 0, 1]
Sample output: [0, 0, 0, 0, 1, 1, 1, 1]
*/

const binarySort = function (binArray) {
  let zeroes = 0;
  binArray.forEach((digit) => {
    if (digit == 0) {
      zeroes++;
    }
  });
  let ones = binArray.length - zeroes;
  // edge case - no zeroes or no ones - array already sorted
  if (!zeroes || !ones) return binArray;
  let sortedArray = new Array(binArray.length)
    .fill(0, 0, zeroes)
    .fill(1, zeroes);
  return sortedArray;
};

const binArray = [0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0];
console.log(binarySort(binArray));
