function zeros (n) {
    var result = 0
    while (n > 0) {
        n = Math.floor(n / 5)
        result = n + result
    }
    return result
}

console.log(zeros (30))