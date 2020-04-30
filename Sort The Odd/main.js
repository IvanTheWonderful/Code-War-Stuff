function sortArray(array) {
    // find the odd numbers
    var odd = array.filter(a => a%2)
    // sort the odd numbers
    var sortedOdd = odd.sort((a, b) => a - b)
    // map the array, if this is an odd number, remove it, take out the first number in sortedOdd, and put it here.
    return array.map((a) => a % 2 ? sortedOdd.shift() : a)
}

// test
var a = [1,2,5,4,0,7,3,2]
console.log(sortArray(a))