function solution(number){
    var int = Math.floor(number) - 1
    var arrayOfNumbers = []
    for (let i = int; i > 2; i--) {
        if (!(i%3) || !(i%5)) {
            arrayOfNumbers.push(i)
        }
    }
    if (arrayOfNumbers.length > 0) {
        return result = arrayOfNumbers.reduce((total, num) => {
            return total + num;
        })
    } else {
        return 0
    }
}

console.log(solution(10.2))


// Best Practice
// function solution(number){
//     var sum = 0;
    
//     for(var i = 1;i< number; i++){
//       if(i % 3 == 0 || i % 5 == 0){
//         sum += i
//       }
//     }
//     return sum;
//   }