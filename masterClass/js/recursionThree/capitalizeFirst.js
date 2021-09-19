/* given an array of strings, return same array with capitalized first letter of each string.

capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

*/

function capitalizeFirst(strArr) {
  const capitalizedArr = [];
  if (strArr.length < 1) {
    return capitalizedArr;
  }
  // capitalize first letter of first element, push this to capitalized, then return the func again without first element
  let newWord = `${strArr[0][0].toUpperCase()}${strArr[0].slice(1)}`;
  capitalizedArr.push(newWord);
  return capitalizedArr.concat(capitalizeFirst(strArr.slice(1)));
}
