/* given people's birth and death dates, find the year with the biggest population. */

const dates = [
  { birth: 1939, death: 2000 }, // 1939-2000
  { birth: 1970, death: 2010 }, // 1970-2000
  { birth: 1952, death: 2030 }, //
  { birth: 1942, death: 1990 }, // 1970-1990
  { birth: 1971, death: 2022 }, // 1971-2000
  { birth: 1890, death: 1938 }, //
];

// function takes an array of objects and creates a dictionary of the dates.

const whichYear = function (datesArr) {
  const yearsRecord = Object.entries(createRecord(datesArr));
  // console.log({yearsRecord})
  let maxAlive = 0;
  let bestYear = 0;
  // for each record, check if its second element is more than current max people alive. If it is, reassign the max and store the first element.
  yearsRecord.forEach((yearArray) => {
    if (yearArray[1] > maxAlive) {
      maxAlive = yearArray[1];
      bestYear = yearArray[0];
    }
  });

  return bestYear;
};

const createRecord = function (datesArr, yearsRecord = {}) {
  if (!datesArr.length) return yearsRecord;
  // for each set of dates, add all the years of a person's life into the record. If they are already there, increment the amount.
  // recursive case
  for (let i = datesArr[0].birth; i < datesArr[0].death + 1; i++) {
    if (yearsRecord[i]) {
      yearsRecord[i]++;
    } else {
      yearsRecord[i] = 1;
    }
  }
  return createRecord(datesArr.slice(1), yearsRecord);
};

whichYear(dates);
