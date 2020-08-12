/* given a binary array, find the index of 0 to be replaced with 1 to get maximum length sequence of continuous 1s. */

const array = [0, 0, 0, 0, 0, 1, 0, 1, 1, 0];
// output: 7

const replaceZero = function (binArr) {
  // create a map of 1s
  const map = createMap(binArr);
  // iterate through map,
  let curIdx = 0;
  let longest = 0;
  let curZeroIdx = 0;
  while (curIdx < map.length) {
    let adjacentIdx = map[curIdx] + curIdx + 1;
    let foundAdjacent = false;
    // find an idx that has something in it
    // to find 2 sequences that are one 0 apart, use idx + map[idx] + 1
    if (map[curIdx] && map[adjacentIdx]) {
      foundAdjacent = true;
      // if there's something there (on map), that is an adjacent sequence
      // add up the two lengths + 1, memoise that if it's longer than current longest
      if (map[curIdx] + map[adjacentIdx] > longest) {
        longest = map[curIdx] + map[adjacentIdx];
        // also if it's longer than current longest, memoise the idx of the 0 - it'll be @ idx + map[idx]
        curZeroIdx = curIdx + map[curIdx];
      }
      // what happens if there's no adjacent at all? We're left with the current slice, plus one zero.
    } else if (map[curIdx]) {
      if (map[curIdx] + 1 > longest) {
        longest = map[curIdx] + 1;
        curZeroIdx = curIdx - 1;
      }
    }
    // keep looping, but jump straight to the adjacent index if found one
    curIdx = foundAdjacent ? adjacentIdx : ++curIdx;
  }

  // return memoised 0 location
  return curZeroIdx;
};

const createMap = function (array) {
  const map = new Array(array.length).fill(null);
  // create 1 counter, store first 1 index
  let counter = 0;
  let startIdx = 0;
  let sequence = false;
  for (let i = 0; i < array.length; i++) {
    // if you've found a 1 & you're not in the middle of a sequence,
    // you're starting one.
    if (array[i] === 1 && sequence === false) {
      startIdx = i;
      counter++;
      sequence = true;
    } else if (array[i] === 1) {
      counter++;
      if (i === array.length - 1) {
        map[startIdx] = counter;
      }
    } else if (array[i] === 0) {
      if (sequence) {
        map[startIdx] = counter;
        counter = 0;
        sequence = false;
      }
    }
  }
  return map;
};

console.log(replaceZero(array));
