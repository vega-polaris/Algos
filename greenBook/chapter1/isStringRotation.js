/* given two strings, find a way to check if one string is a rotation of the other. You are also given helper function isSubstring which accepts two strings and checks if one is a substring of the other. Find a way to solve this problem with only one call to the helper function.

input: 'waterbottle', 'erbottlewat'
output: true

*/

const isSubstring = function (string, substring) {
  console.log({ string });
  // if string is shorter than 1, return false.
  if (string.length < 1) return false;
  // is the first char of string equal to substring?
  if (string[0] === substring[0]) {
    let identical = true;
    // if yes, loop through substring to see if they continue to be identical
    for (let i = 0; i < substring.length; i++) {
      console.log({ substringI: substring[i], stringI: string[i] });
      if (substring[i] !== string[i]) {
        identical = false;
        break;
      }
    }
    if (identical) return true;
  }
  // if no, run this function again on a string without first char.
  return isSubstring(string.slice(1), substring);
};

/* if the second string is a rotation of the first, that means that both strings are made of two pieces that are arranged in different orders. So with one of the strings, we switched its head and tail.
what's stopping us from putting the pieces back in place and checking if we end up with two identical strings?
We don't know where to start. We could look for the first letter of one string inside the other and then see if that results in two pieces which are both contained in both strings.
But there's a way around that. If we just double either of the strings, we should be able to see the un-rotated string in the resulting one. I.e., if our original string is "potato" and we've rotated to "tatopo", starting "tatopo" again right after the first time will bring the original ending of the word to the ending of the rotated string. We'll get "tatopotatopo", which contains "potato". */

const isRotation = function (string, rotString) {
  // double first string
  const doubleString = string + string;
  // send doubled string and rotated string to helper function
  return isSubstring(doubleString, rotString);
};

// console.log(isSubstring('waterbottle', 'bottlewater'));
console.log(isRotation('blue waterbottle', 'bottleblue water'));
