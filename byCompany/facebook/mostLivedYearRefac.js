const dates = [
  { birth: 1939, death: 2000 }, // 1939-2000
  { birth: 1970, death: 2010 }, // 1970-2000
  { birth: 1952, death: 2030 }, //
  { birth: 1942, death: 1990 }, // 1970-1990
  { birth: 1971, death: 2022 }, // 1971-2000
  { birth: 1890, death: 1938 }, //
];

const whichYear = function (datesArr) {
  // create separate arrays for births and deaths.
  const { birthsArr, deathsArr } = createSortedYearArrs(datesArr);
  return iterateThroughYears(birthsArr, deathsArr);
};

const iterateThroughYears = function (
  births,
  deaths,
  curPop = 0,
  maxPop = 0,
  maxPopYear = 0
) {
  // ---- Base cases ----- //
  if (!births.length) {
    // all the years left are just going to decrease the pop - there's no chance of a new max.
    // so just return what max you have now
    return maxPopYear;
  }
  if (!deaths.length) {
    // every year left adds 1 to curPop. Add them all and check if the last year is a new max
    births.forEach((birth) => {
      curPop++;
    });
    return curPop > maxPop ? births[births.length - 1] : maxPopYear;
  }
  // ---- Recursive logic ----//
  // iterate through them both simultaneously, adding or subtracting from current population. Whenever population changes, check if it's a new max.
  if (births[0] < deaths[0]) {
    curPop++;
    // now that we've incremented, is this a new max?
    if (curPop > maxPop) {
      maxPop = curPop;
      maxPopYear = births[0];
    }
    return iterateThroughYears(
      births.slice(1),
      deaths,
      curPop,
      maxPop,
      maxPopYear
    );
  } else if (deaths[0] < births[0]) {
    // if the nearest year is a death, decrement cur pop (but not under 0)
    curPop = curPop > 0 ? curPop-- : 0;
    return iterateThroughYears(
      births,
      deaths.slice(1),
      curPop,
      maxPop,
      maxPopYear
    );
  }
};

const createSortedYearArrs = function (datesArr) {
  let birthsArr = [];
  let deathsArr = [];

  datesArr.forEach((person) => {
    birthsArr.push(person.birth);
    deathsArr.push(person.death);
  }); //O(n)
  birthsArr.sort((a, b) => a - b); // O(n^2)
  deathsArr.sort((a, b) => a - b); // O(n^2)
  return { birthsArr, deathsArr };
};

whichYear(dates);
