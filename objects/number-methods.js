let num = 103.941

console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))


let min = 0
let max = 1
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
// 0 - 0.999999
console.log(randomNum)

// Challenge Area
// 1 - 5 true if correct - false if not correct

let guessNum = function (num) {
    let answer = Math.floor(Math.random() * (5 - 1 + 1) + 1)
    if (num === answer) {
        console.log('YOU\'RE A WINNER!')
        return true
    } else {
        console.log('Sorry you lose!')
        return false
    }
}

console.log(guessNum(3))