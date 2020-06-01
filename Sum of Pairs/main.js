// var sum_pairs = function(ints, s) {
//     var result
//     while (result === undefined) {
//         let num = ints.shift()
//         ints.forEach(element => {
//             if (num + element == s) {
//                 return result = [num, element]
//             }
//         });
//         if (ints.length === 1) {
//             break
//         }
//     }
//     return result
// }


var sum_pairs = function(ints, s) {
    var map = {},
        pair, pairMaxIndex = ints.length - 1;

    for (var i = 0; i <= pairMaxIndex; i++) {
        var a = ints[i];
        var b = s - a;
        var j = map[b];
        console.log("b is: " + b)
        console.log("j is: " + j)
        if (j !== undefined && i <= pairMaxIndex && j <= pairMaxIndex) {
            pairMaxIndex = i > j ? i : j;
            pair = i < j ? [a, b] : [b, a];
        }
        var tmp = map[a];
        if (tmp === undefined || i < tmp) {
            map[a] = i;
        }
    }
    return pair;
};

var l1= [1, 4, 8, 7, 3, 15];
var l2= [1, -2, 3, 0, -6, 1];
var l3= [20, -13, 40];
var l4= [1, 2, 3, 4, 1, 0];
var l5= [10, 5, 2, 3, 7, 5];
var l6= [4, -2, 3, 3, 4];
var l7= [0, 2, 0];
var l8= [5, 9, 13, -3];
var l9= [2, 3, 7, 5]


console.log(sum_pairs(l9, 10))