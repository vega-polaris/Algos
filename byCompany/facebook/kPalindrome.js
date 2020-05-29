/* a k-palindrome is a string which transforms int oa palindrome on removing a max of k characters

Given a string S and an integer K, print YES if S is a K-palindrome; otherwise print NO.

To check if something is a palindrome, we compare mirror indices (i.e. is the last index equal to the first index).
We can run the same check here. When we find something that's unequal, we decrement k and move one of our pointers towards the other until one of three things happens:
-- we've exceeded k
-- we've joined the other pointer
-- we've hit an equal character to the other pointer. If this happens before we exceed k, we can continue incrementing our pointers.
But doing this just once doesn't mean we're done. Imagine a string abcdcbha. Once our right pointer hits h, how do we know if we should move that or our left pointer, which is on b?
So we have to do it once, but if that hasn't worked, we have to try the other direction.
*/

const kPal = function (str, k) {
  if (str.length < 2 && k > -1) return true;
  if (k < 0) return false;
  // start comparing the mirror indices.
  if (str[0] === str[str.length - 1]) {
    return kPal(str.slice(1, str.length - 1), k);
  } else {
    let tempK = --k;
    let shiftOnce = kPal(str.slice(1), tempK);
    if (!shiftOnce) {
      shiftOnce = kPal(str.slice(0, str.length - 1), --k);
    }
    return shiftOnce;
  }
};

console.log(kPal('absccybia', 55));
