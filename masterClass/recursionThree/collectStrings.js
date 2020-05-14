/* func accepts an object and returns an array of all the values in the object that have a type of string */

const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
};

function collectStrings(obj) {
  const stringArr = [];
  for (const prop in obj) {
    if (typeof obj[prop] === 'string') {
      stringArr.push(obj[prop]);
    } else if (typeof obj[prop] === 'object' && obj[prop] !== null) {
      stringArr.push(...collectStrings(obj[prop]));
    }
  }
  return stringArr;
}

collectStrings(obj);
