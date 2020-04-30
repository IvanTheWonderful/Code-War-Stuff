function findNextSquare(sq) {
    var num = Math.sqrt(sq)
    if (Number.isInteger(num)) {
        return (num+1)*(num+1)
    } else {
        return -1;
    }
}