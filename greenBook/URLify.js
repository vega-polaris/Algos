const URLify = function(string, length) {
  // create new string
  let urlString = '';
  // use a flag.
  let postSpace = false;
  // loop through string, storing every letter
  // O(n)
  for (let i = 0; i < length; i++) {
    //Switch flag to true when hitting a space. When hitting a letter and the flag is true, join a %20 before the letter.
    if (string[i] === ' ') {
      postSpace = true;
    } else {
      if (postSpace) {
        urlString += '%20' + string[i];
        postSpace = false;
      } else {
        urlString += string[i];
      }
    }
  }
  return urlString;
};

/*
time = O(n);
space = O(n);
*/
