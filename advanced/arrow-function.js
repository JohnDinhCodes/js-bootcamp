const square = (num) => num * num

const squareLong = (num) => {
    return num * num
}

console.log(square(5))

const people = [{
    name: 'John',
    age: 22
}, {
    name: 'Jessica',
    age: 18,
}, {
    name: 'Michelle',
    age: 16
}, {
    name: 'James',
    age: 34
}]

// const under30 = people.filter(function (person) {
//     return person.age < 30
// })

const under30 = people.filter((person) => person.age < 30)

console.log(under30)

// 1. Find the person with age 22
// 2. Print that person name

const age22 = people.filter((person) => person.age === 22)
console.log('this person is 22')
console.log(age22)