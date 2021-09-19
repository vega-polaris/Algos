/* func called power which accepts a base and an exponent. func returns power of base to exponent, mimicking functionality of Math.pow(). forget negative bases and exponents.

power(2,0) // 1
power(2,2) // 4
power(2,4) // 16

*/

function power(base, exponent) {
  let total = 1;
  function multiply(base, total, exponent) {
    if (exponent === 0) return total;
    return base * multiply(base, total, exponent - 1);
  }
  return multiply(base, total, exponent);
}
