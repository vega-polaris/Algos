function isPalindrome(string) {
  if (string.length <= 1) return true;
  if (string[0] === string[string.length - 1]) {
    return isPalindrome(string.slice(1, string.length - 1));
  } else {
    return false;
  }
}
