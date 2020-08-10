/* Given two sorted arrays of different sizes, merge elements of the smaller array into the vacant cells of the larger array. Vacant cells represented by 0s.

Sample input:
let shortArray = [1, 8, 9, 10, 15];
let longArray = [0, 2, 0, 3, 0, 5, 6, 0, 0];

Sample output: [1, 2, 3, 5, 6, 8, 9, 10, 15];

*/

const mergeWithConstraints = function (shortArray, longArray) {
  // the locations of the 0s in the long array are irrelevant.
  // the 0s only matter in that there should be as many of them as elements of the short array, otherwise we're not satisfying the constraints. So let's check that first.
  const blanks = longArray.filter((element) => element === 0);
  if (shortArray.length !== blanks.length) return false;
  // if we've come this far, we want to start creating our return array.
  const merged = [];
  let longPointer = 0;
  let shortPointer = 0;
  while (shortPointer < shortArray.length && longPointer < longArray.length) {
    if (longArray[longPointer] === 0) longPointer++;
    if (longArray[longPointer] > shortArray[shortPointer]) {
      merged.push(shortArray[shortPointer]);
      shortPointer++;
    } else {
      if (longArray[longPointer] !== 0) merged.push(longArray[longPointer]);
      longPointer++;
    }
  }
  // now we may still have some content in the short or the long arrays.
  let remaining;
  if (longPointer < longArray.length - 1) {
    remaining = longArray.slice(longPointer.filter((el) => el !== 0));
    // merged.concat(...longArray.slice(longPointer).filter(el => el !== 0));
  } else if (shortPointer < shortArray.length - 1) {
    remaining = shortArray.slice(shortPointer);
  }
  return [...merged, ...remaining];
};

let longArray = [0, 2, 0, 3, 0, 5, 6, 0, 0];
let shortArray = [1, 8, 9, 10, 15];
mergeWithConstraints(shortArray, longArray);
