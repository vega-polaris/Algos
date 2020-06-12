/*
- select 2nd element of array
- compare it with the preceding element and swap if necessary
- or iterate further down the sorted side, inserting current element right between one that's bigger and one that's smaller.
*/

const arr = [1, 53, 23, 5, 86, 1231, 7546, 231423, 3436, 13];

// ============ Iterative solution ============ //
const insertSort = function (arr) {
  let sortedBy = 0;
  let curIdx = 1;
  let foundSmaller = false;
  while (sortedBy < arr.length) {
    let findSpot = sortedBy;
    while (arr[curIdx] < arr[findSpot]) {
      foundSmaller = true;
      findSpot--;
    }
    if (foundSmaller) {
      arr.splice(findSpot + 1, 0, ...arr.splice(curIdx, 1));
    }
    sortedBy++;
    curIdx++;
  }
  return arr;
};

insertSort(arr);
