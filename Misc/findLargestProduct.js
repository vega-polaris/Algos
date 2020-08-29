/* Given an array of ints, find the largerst product of two ints in the array. */

const findLargestProduct = function (array) {
  array.sort((a, b) => a - b);
  return Math.max(
    array[array.length - 1] * array[array.length - 2],
    array[0] * array[1]
  );
};

const findLargestProductLinear = function (array) {
  let max = array[0];
  let penMax = -Infinity;
  let min = array[0];
  let penMin = Infinity;

  array.forEach((num) => {
    if (num > max) {
      penMax = max;
      max = num;
    } else if (num > penMax && num < max) {
      penMax = num;
    }
    if (num < min) {
      penMin = min;
      min = num;
    } else if (num > min && num < penMin) {
      penMin = num;
    }
  });
  return Math.max(max * penMax, min * penMin);
};

const array = [1, 7, 3, 9, 10, 4, 8, -10, -30];
console.log(findLargestProduct(array));
// [-30, -10, 1, 3, 4, 7, 8, 9, 10]
console.log(findLargestProductLinear(array));
