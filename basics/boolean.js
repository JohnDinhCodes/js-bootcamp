// === - equality operator
// !== - not equal operator
// < - less than operator
// > - greater than operator
// <= - less than or equal to operator
// >= - greater than or equal to operator

let temp = 180

if (temp <= 32) {
    console.log('It is freezing outside!')
}

if (temp >= 110) {
    console.log('It is way too hot outside!')
}

// Challenge area

let age = 20

// If 7 or under print message about child pricing
if (age <= 7) {
    console.log('You get the child discount!')
}
// If 65 or older print message about senior discount

if (age >= 65) {
    console.log('You get the senior citizen discount!')
}

if (age > 7 && age < 65) {
    console.log('Too bad, you don\'t get any discounts!')
}