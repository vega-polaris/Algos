/* recursiveRange accepts a number and adds up all the numbers from 0 to number.

recursiveRange(6) // 21
recursiveRange(10) // 55 

*/

function recursiveRange(num) {
  if (num === 1) return num;
  return num + recursiveRange(num - 1);
}
