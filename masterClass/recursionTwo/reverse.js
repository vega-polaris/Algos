/* accepts a string and returns its reversal */
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function reverse(string) {
  let reverseString = '';
  let strCopy = string;
  const reverseHelp = string => {
    if (string.length < 1) return '';
    return (
      string[string.length - 1] +
      reverseHelp(string.slice(0, string.length - 1))
    );
  };
  return reverseHelp(strCopy);
}
