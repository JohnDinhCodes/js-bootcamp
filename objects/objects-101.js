let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 328
}

console.log(`${myBook.title} - by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} - by ${myBook.author}`)

// Challenge Area

// name, age, location

// Andrew is 27 and lives in Philadelphia.

// Increase age by 1 and print message again

let user = {
    name: 'John',
    age: 20,
    location: 'Philadelphia'
}

console.log(`${user.name} is ${user.age} and lives in ${user.location}`)

user.age++

console.log(`${user.name} is ${user.age} and lives in ${user.location}`)