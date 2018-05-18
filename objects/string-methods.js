let name = '                John              '

// Length property

console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Includes method
let password = 'abc123aeghewoa23098'
console.log(password.includes('password'))

// Trim 
console.log(name.trim())

// Challenge Area

// isValidPassword
// length is more than 8 - and it doesn't contain the word password

let isValidPassword = function (password) {
    if (password.length > 8 && !(password.includes('password'))) {
        console.log('Great password!')
        return true
    } else {
        console.log('Get a better password!')
        return false
    }
}

console.log(isValidPassword('324'))
console.log(isValidPassword('3242jhodfahio'))
console.log(isValidPassword('32passwordahio'))