/* Write a function called Same, that accepts two arrays. The function should return true if every value in the array has a corresponding squared value in the second array. The frequency of values must be the same. */

const origArr = [1, 2, 5, 30, 1, 2, 5];
const squaredArr = [1, 4, 25, 900, 1, 4, 25];

const same = (arrOne, arrTwo) => {
  // loop through first array and count it.
  const arrOneCounter = {};
  arrOne.forEach(el => {
    if (arrOneCounter[Math.pow(el, 2)]) arrOneCounter[Math.pow(el, 2)]++;
    else arrOneCounter[Math.pow(el, 2)] = 1;
  });
  // loop through second array and count it.
  const arrTwoCounter = {};
  arrTwo.forEach(el => {
    if (arrTwoCounter[el]) arrTwoCounter[el]++;
    else arrTwoCounter[el] = 1;
  });
  // compare the two counts.
  for (const el in arrTwoCounter) {
    if (arrOneCounter[el] !== arrTwoCounter[el]) return false;
  }

  return true;
};
same(origArr, squaredArr);
