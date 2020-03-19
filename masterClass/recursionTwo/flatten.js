function flatten(multiDimArr) {
  let flatArr = [];
  for (const el of multiDimArr) {
    if (Array.isArray(el)) {
      flatArr = flatArr.concat(flatten(el));
    } else flatArr.push(el);
    console.log({ flatArr });
  }
  return flatArr;
}
