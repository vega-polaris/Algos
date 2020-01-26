const arr = [
    'p',
    'e',
    'r',
    'f',
    'e',
    'c',
    't',
    '  ',
    'm',
    'a',
    'k',
    'e',
    's',
    '  ',
    'p',
    'r',
    'a',
    'c',
    't',
    'i',
    'c',
    'e',
]

function reverseWords(arr) {
    // loop through input array, putting each letter in a string
    let tempArray = []
    let reversedArray = []
    arr.forEach((letter, idx) => {
        // when the letter is ' ', unshift the string into an array and start a new string
        if (letter === '  ' || idx === arr.length - 1) {
            // create this array with all the elements in the other two arrays
            reversedArray = [...tempArray, ' ', ...reversedArray]
            tempArray = []
        } else {
            tempArray.push(letter)
        }
    })

    return reversedArray.slice(0, reversedArray.length - 1)
}

reverseWords(arr)
