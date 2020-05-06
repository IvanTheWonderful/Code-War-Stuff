function count (string) {  
    const result = {}
    var arrayOfChar = string.split("")
    arrayOfChar.forEach(element => {
        if (result[element] === undefined) {
            result[element] = 1
        } else {
            result[element] = result[element] + 1
        }
    });
    return result
}

console.log(count ("afasdfe"))
console.log(count ("aaabbcdddde"))
console.log(count (""))