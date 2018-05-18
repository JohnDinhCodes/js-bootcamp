// Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Default arguments

let getScoreText = function (name = 'Anonymous', score = 0) {
    return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText(undefined, 999999999)
console.log(scoreText)

// Challenge area

// total, tipPercent

let tipCalculator = function (total, tipPercent = 0.2) {
    // Show total
    // show tip percent and how much it is from total
    let tipPercentText = tipPercent * 100
    let tipCost = total * tipPercent    
    let totalCost = total + tipCost
    return 'Your total is: $' + total + '. You are tipping ' + tipPercentText + '%! ($' + tipCost + ') - $' + totalCost
}

let bill = tipCalculator(100, 0.1)
console.log(bill)