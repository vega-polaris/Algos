/* productOfArray takes an array of nums and returns the product of them all.

productOfArray([1,2,3]) // 6
productOfArray([1,2,3,10]) // 60

*/

function productOfArray(numsArr) {
  if (numsArr.length < 2) return numsArr[0];
  return numsArr[0] * productOfArray(numsArr.slice(1));
}
