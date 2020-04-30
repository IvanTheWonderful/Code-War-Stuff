function generateHashtag (str) {
    var filtered = str.split(" ").filter((curr) => {
        if (curr != "") {
            return curr
        }
    })
    var capitalized = filtered.map((curr) => {
        var letters = curr.split("")
        letters[0] = letters[0].toUpperCase()
        return letters.join("")
    })
    var result = "#"
    capitalized.forEach(element => {
        result += element
    });
    if (result.length >= 141) {
        return false
    } else if (result === "#") {
        return false
    } else {
        return result
    }
}
var str = "asdfasdfasdf bshgsgh                    er"
console.log(generateHashtag(str))
console.log(generateHashtag("a".repeat(139)))


//  // Best Practise
// function generateHashtag (str) {
//   return str.length > 140 || str === '' ? false :
//   '#' + str.split(' ').map(capitalize).join('');
// }

// function capitalize(str) {
// return str.charAt(0).toUpperCase() + str.slice(1);
// }