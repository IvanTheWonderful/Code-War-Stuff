function solution(roman){
    function letterToNumber(l) {
        switch(l) {
            case "I": return 1;
            case "V": return 5;
            case "X": return 10;
            case "L": return 50;
            case "C": return 100;
            case "D": return 500;
            case "M": return 1000;
        }
    }
    var num = letterToNumber(roman.charAt(0))
    for (let i = 1; i < roman.length; i++) {
        var curr = letterToNumber(roman.charAt(i));
        var pre = letterToNumber(roman.charAt(i-1));
        if (curr <= pre) {
            num += curr;
        } else {
            num = num + curr - (pre * 2)
        }
    }
    return num
}
console.log(solution("MMVIII"))