const subArraySum = (intArr, n) => {
  let max = null;
  let startWindow = 0;
  let endWindow = n;
  let arrSlice = intArr.slice(startWindow, endWindow);
  while (arrSlice.length >= n) {
    let curMax = arrSlice.reduce((acc, num) => acc + num);
    max = curMax > max ? curMax : max;
    startWindow++;
    endWindow++;
    arrSlice = intArr.slice(startWindow, endWindow);
  }
  return max;
};
