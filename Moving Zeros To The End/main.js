var moveZeros = function (arr) {
    var reversedArr = arr.reverse()
    reversedArr.forEach((element, index) => {
        if (element === 0) {
            arr.splice(index, 1)
            arr.unshift(0)
        }
    });
    return reversedArr.reverse()
}

var a = ["asdf", 0, "a", 0, 1, 2, 5]
console.log(moveZeros(a))

// Best Practice
// var moveZeros = function (arr) {
//     var filtedList = arr.filter(function (num){return num !== 0;});
//     var zeroList = arr.filter(function (num){return num === 0;});
//     return filtedList.concat(zeroList);
// }