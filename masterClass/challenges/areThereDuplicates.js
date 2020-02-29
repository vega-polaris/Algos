/* areThereDuplicates accepts a variable number of arguments, checks whether there are any dupes among the args. Use frequency counter pattern or multiple pointers pattern.

areThereDuplicates(1, 2, 3) -> false
areThereDuplicates(1, 2, 2) -> true
areThereDuplicates('a', 'b', 'c', 'a') -> true

Time: O(n)
Space: O(n)

BONUS:
Time O(log n)
Space O(1)

*/

const areThereDuplicates = function() {
  const memo = {};
  const args = [...arguments];
  for (const argument of args) {
    if (!memo[argument]) memo[argument] = true;
    else return true;
  }
  return false;
};

areThereDuplicates('a', 'b', 'c', 'a');
