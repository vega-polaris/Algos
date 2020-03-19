function nestedEvenSum(obj) {
  let sum = 0;
  function iterate(obj) {
    for (const key in obj) {
      let curVal = obj[key];
      if (typeof curVal === 'number' && curVal % 2 === 0) {
        sum += curVal;
      } else if (typeof curVal === 'object' && curVal !== null) {
        iterate(curVal);
      }
    }
  }
  iterate(obj);
  return sum;
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
