//implement a function that given an integer number num, it returns the a string representation of the number, comma separated.
// i.e., f(1234) => '1,234'

const input = 1234

const stringify = function(num, numArray = []) {
    let stringNum = String(num)
    // base case - if num.length < 2, push it into array, join array, return
    if (stringNum.length < 3) {
        numArray.unshift(stringNum)
        return numArray.join(',')
    } else {
        // get the last three nums
        numArray.unshift(
            stringNum.slice(stringNum.length - 3, stringNum.length)
        )
        return stringify(stringNum.slice(0, stringNum.length - 3), numArray)
    }
    // keep looping till the string remaining is shorter than 3, then push that into the array
    // join array via , and return
}

stringify(input)
