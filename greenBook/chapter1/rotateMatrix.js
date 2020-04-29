/* given an image represented by an N*N matrix, where each pixel in the image is represented by an int, write a method to rotate the image by 90 degrees. Can you do this in place?

Input:
1, 2, 3, 
4, 5, 6,
7, 8, 9

Output:
7, 4, 1,
8, 5, 2,
9, 6, 3

*/

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// for starters - forget about "in place".
function rotateMatrix(matrix) {
  const copyMat = new Array(matrix.length);
  // loop through big array
  for (let i = 0; i < matrix.length; i++) {
    copyMat[i] = new Array(matrix.length);
  }
  // each small array gets populated to the proper rows and columns in the copy.
  // first row gets populated as [row][row.length - 1],
  // with the row increasing.
  // second row gets populated as [row][row.length - 2],
  // with row increasing.
  for (let i = 0; i < matrix.length; i++) {
    let curRow = matrix[i].slice();
    for (let j = 0; j < curRow.length; j++) {
      let curInt = curRow[j];
      // new row is same as cur column
      // new column is length - i
      const newRow = j;
      const newColumn = matrix.length - 1 - i;
      copyMat[newRow][newColumn] = curInt;
    }
  }

  return copyMat;
}

rotateMatrix(matrix);
