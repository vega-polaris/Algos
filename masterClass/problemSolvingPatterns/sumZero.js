/* write a function that accepts a sorted array of ints. The function should find the first pair where the sum is 0. return an array that includes that pair, or undefined if there's no such pair.

Examples:
sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
sumZero([-2, 0, 1, 3]) // undefined

*/

const sumZero = intArr => {
  let startPointer = 0;
  let endPointer = intArr.length - 1;
  while (startPointer < endPointer) {
    let curSum = intArr[startPointer] + intArr[endPointer];
    if (curSum === 0) {
      return [intArr[startPointer], intArr[endPointer]];
    } else if (curSum < 0) {
      startPointer++;
    } else if (curSum > 0) {
      endPointer--;
    }
  }
};

console.log(sumZero([-3, -2, -1, 0, 1, 2, 4]));
