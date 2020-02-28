const stringCompression = function(string) {
  if (string.length < 1) return string;
  // create pointers - one to mark the letter we're dealing with, the other to count its appearances.
  let letterP = 0;
  let countP = 1;
  // initialize counter to 1
  let counter = 1;
  let finalString = string[0];
  while (countP < string.length) {
    if (string[letterP] === string[countP]) {
      counter++;
      countP++;
    } else if (
      string[letterP] !== string[countP] ||
      countP === string.length - 1
    ) {
      finalString += String(counter) + string[countP];
      letterP = countP;
      counter = 1;
      countP++;
    }
  }

  return finalString.length < string.length ? finalString : string;
};
