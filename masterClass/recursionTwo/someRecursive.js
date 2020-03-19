/* accepts an array and a callback. return true if a single val in array returns true when passed to callback; otherwise return false. */

// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(array, callback) {
  const coArray = array.slice();
  if (coArray.length < 1) return false;
  if (callback(coArray[0])) return true;
  else return someRecursive(array.slice(1), callback);
}
