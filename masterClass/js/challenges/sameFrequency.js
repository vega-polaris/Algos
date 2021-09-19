const sameFrequency = (intOne, intTwo) => {
  const memo = {};
  const intOneStr = String(intOne);
  const intTwoStr = String(intTwo);
  if (intOneStr.length !== intTwoStr.length) return false;

  for (const digit of intOneStr) {
    if (!memo[digit]) memo[digit] = 1;
    else memo[digit]++;
  }

  for (const digit of intTwoStr) {
    if (memo[digit]) memo[digit]--;
    else return false;
  }
  return true;
};
