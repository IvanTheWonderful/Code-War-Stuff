function orderWeight(strng) {
    var realWeights = strng.split(" ")

    function fakeWeight (num) {
        return num.toString().split("").reduce((curr, next) => {
            return parseInt(curr) + parseInt(next)
        })
    }

    return realWeights.sort((a,b) => {
        var fakeA = fakeWeight(a)
        var fakeB = fakeWeight(b)
        if (fakeA != fakeB) {
            return fakeA - fakeB
        } else {
            return a > b ? 1 : -1
        }
    }).join(" ")
}

console.log(orderWeight("56 65 74 100 99 68 86 180 90"))
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"))