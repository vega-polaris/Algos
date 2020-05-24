// ======= HELPER FUNCTIONS ======= //

const numsArr = [1, 235, 696, 3426, 855552, 2, 8275632848, 343, 983];
// get the digit of a number from a specified place, e.g. get the 3rd digit of the number 30244
const getDigit = function (num, place) {
  const stringNum = Math.abs(num).toString(10);
  const ithDigit =
    stringNum.length - place - 1 >= 0
      ? Number(stringNum[stringNum.length - place - 1])
      : 0;
  return ithDigit;
};

const countDigits = function (num) {
  return Math.abs(num).toString(10).length;
};

const mostDigits = function (arrayOfNums) {
  let longestNumLength = 0;
  arrayOfNums.forEach((num) => {
    let numDigits = countDigits(num);
    longestNumLength = Math.max(numDigits, longestNumLength);
  });
  return longestNumLength;
};

// ======= Radix sort ======= //

const radixSort = function (numsArr) {
  // find how many digits the largest num has
  let loops = mostDigits(numsArr);
  // loop this number of times
  for (let i = 0; i < loops; i++) {
    // create a bucket array for each digit
    let buckets = Array.from({ length: 10 }, () => []);
    // loop through the nums array, looking at the ith digit and pushing each num into its bucket.
    numsArr.forEach((num) => {
      let ithDigit = getDigit(num, i);
      buckets[ithDigit].push(num);
    });
    // loop through buckets and reassign the original array with their contents
    numsArr = buckets.flat();
  }

  return numsArr.flat();
};

radixSort(numsArr);

// BIG O
// Time O (n * k), where k is the length of the longest digit. But if the numbers are all unique, it's possible (because of the way computers store number) that k will actually equal log n.
//
