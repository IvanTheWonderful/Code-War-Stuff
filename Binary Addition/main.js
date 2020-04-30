// My Answer
function addBinary(a,b) {
    var divisors = []
    for (let sum = (a + b); sum >= 1; sum = sum/2) {
        if (Math.floor(sum) % 2 === 1) {
            divisors.push("1")
        } else {
            divisors.push("0")
        }
    }
    var binary = divisors.reverse()
    return binary.reduce((prev, curr) => prev.toString() + curr.toString())
}

// Better Answer
function addBinary(a,b) {
    return (a + b).toString(2)
    // toString(2): number will show as a binary value
}