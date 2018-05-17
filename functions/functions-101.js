// Function - input, code, output

let greetUser = function () {
    console.log('Welcome user')
}

greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)

// Challenge Area 

// convertFahrenheitToCelsius

// Call a couple of times (32 -> 0) (68 -> 20)

let convertFahrenheitToCelsius = function (temp) {
    let result = (temp - 32) * (5 / 9)
    return result
}

let freezingTemp = convertFahrenheitToCelsius(32)
let boilingTemp = convertFahrenheitToCelsius(100)
console.log(freezingTemp)
console.log(boilingTemp)