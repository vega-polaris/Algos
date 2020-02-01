/* eslint-disable complexity */
/*

Given a 2D array binaryMatrix of 0s and 1s, implement a function getNumberOfIslands that returns the number of islands of 1s in binaryMatrix.

An island is defined as a group of adjacent values that are all 1s. A cell in binaryMatrix is considered adjacent to another cell if they are next to each either on the same row or column. Note that two values of 1 are not part of the same island if they’re sharing only a mutual “corner” (i.e. they are diagonally neighbors).

Explain and code the most efficient solution possible and analyze its time and space complexities.

*/

const binaryMatrix = [
  [0, 1, 0, 1, 0],
  [0, 0, 1, 1, 1],
  [1, 0, 0, 1, 0],
  [0, 1, 1, 0, 0],
  [1, 0, 1, 0, 1]
];
const checkAround = (rowIdx, columnIdx, matrix) => {
  if (rowIdx - 1 >= 0 && matrix[rowIdx - 1][columnIdx] === 1) {
    matrix[rowIdx - 1][columnIdx] = 2;
    checkAround(rowIdx - 1, columnIdx, matrix);
  }
  if (rowIdx + 1 < matrix.length && matrix[rowIdx + 1][columnIdx] === 1) {
    matrix[rowIdx + 1][columnIdx] = 2;
    checkAround(rowIdx + 1, columnIdx, matrix);
  }
  if (columnIdx - 1 >= 0 && matrix[rowIdx][columnIdx - 1] === 1) {
    matrix[rowIdx][columnIdx - 1] = 2;
    checkAround(rowIdx, columnIdx - 1, matrix);
  }
  if (
    columnIdx + 1 < matrix[rowIdx].length &&
    matrix[rowIdx][columnIdx + 1] === 1
  ) {
    matrix[rowIdx][columnIdx + 1] = 2;
    checkAround(rowIdx, columnIdx + 1, matrix);
  }
};

const findIslands = binaryMatrix => {
  // keep track of sum
  let count = 0;
  // double loop, once through outer array, once through each of inner.
  for (let rowIdx = 0; rowIdx < binaryMatrix.length; rowIdx++) {
    for (
      let columnIdx = 0;
      columnIdx < binaryMatrix[rowIdx].length;
      columnIdx++
    ) {
      // if current column is a 1, check all the columns around it
      if (binaryMatrix[rowIdx][columnIdx] === 1) {
        count++;
        binaryMatrix[rowIdx][columnIdx] = 2;
        checkAround(rowIdx, columnIdx, binaryMatrix);
      }
    }
  }
  return count;
};

console.log(findIslands(binaryMatrix));
