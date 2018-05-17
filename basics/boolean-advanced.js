let isAccountLocked = false
let userRole = 'admin'

if (isAccountLocked) {
    console.log('Account is locked')
} else if (userRole === 'admin') {
    console.log('Welcome Admin!')
} else {
    console.log('Welcome!')
}

// Challenge Area 

let temp = 4

if (temp <= 32) {
    console.log('It is freezing outside!')
} else if (temp >= 100) {
    console.log('It is hot outside!')
} else {
    console.log('Go for it. It is pretty nice outside.')
}

// It is freezing outside!
// It is hot outside!
// Go for it. It is pretty nice.