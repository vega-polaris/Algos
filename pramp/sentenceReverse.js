const arr = [
  "p",
  "e",
  "r",
  "f",
  "e",
  "c",
  "t",
  "  ",
  "m",
  "a",
  "k",
  "e",
  "s",
  "  ",
  "p",
  "r",
  "a",
  "c",
  "t",
  "i",
  "c",
  "e"
];

function reverseWords(arr) {
  // loop through input array, putting each letter in a string
  let tempArray = [];
  let reversedArray = [];
  arr.forEach((letter, idx) => {
    // when the letter is ' ', unshift the string into an array and start a new string
    if (letter === "  ") {
      // create this array with all the elements in the other two arrays
      // check for first word in array
      if (reversedArray[0]) {
        tempArray.push(letter);
      }
      reversedArray = [...tempArray, ...reversedArray];
      tempArray = [];
    } else if (idx === arr.length - 1) {
      tempArray.push(letter, "  ");
    } else {
      tempArray.push(letter);
    }
  });

  return [...tempArray, ...reversedArray];
}

reverseWords(arr);
