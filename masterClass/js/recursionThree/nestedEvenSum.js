function nestedEvenSum(obj) {
  // put all values in an array
  let valsArr = Object.values(obj);
  // use nestedEvenSum on every value (map)
  return valsArr
    .map(val => {
      if (typeof val === 'number' && val % 2 === 0) {
        return val;
      } else if (typeof val === 'object' && val !== null) {
        return nestedEvenSum(val);
      } else return 0;
    })
    .reduce((accum, val) => accum + val, 0);
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup'
    }
  }
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' }
};
