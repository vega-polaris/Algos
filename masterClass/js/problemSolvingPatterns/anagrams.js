/* Given two strings, determine if one is an anagram of the other.

Examples:
validAnagram('','') // true
validAnagram('aaz','zza') // false
validAnagram('anagram','nagaram') // true
validAnagram('rat','car') // false
validAnagram('awesome','awesom') // false
*/

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const list1 = {};
  for (let char of str1) {
    if (list1[char]) {
      list1[char]++;
    } else {
      list1[char] = 1;
    }
  }
  for (let char of str2) {
    if (list1[char]) {
      list1[char]--;
    } else {
      return false;
    }
  }
  return true;
}

validAnagram('anagram', 'nagaram');
