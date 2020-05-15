class iterator {
  constructor(multiDimArr) {
    this.arrs = multiDimArr;
  }

  hasNext() {
    console.log(this.arrs);
    let somethingThere = false;
    this.arrs.forEach((array) => {
      if (array.length) somethingThere = true;
    });
    return somethingThere;
  }

  next(returnArr = []) {
    if (!this.arrs.length) return returnArr;
    // loop through 1st element of each arr, finding the smallest, taking it out and popping it in a return array
    let min = this.arrs[0][0];
    let minLocation = 0;
    for (let i = 1; i < this.arrs.length; i++) {
      let curArr = this.arrs[i];
      console.log({ curArr });
      if (curArr[0] < min) {
        min = curArr[0];
        minLocation = i;
      }
    }
    returnArr.push(min);
    this.arrs[minLocation].shift();
    if (!this.arrs[minLocation].length) {
      this.arrs.splice(minLocation, 1);
    }
    return this.next(returnArr);
  }
}

const myIter = new iterator([
  [1, 5, 7],
  [2, 3, 10],
  [4, 6, 9],
]);
myIter.hasNext();
myIter.next();
