const Person = function (firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

const me = new Person('John', 'Dinh', 20)
console.log(me)

const you = new Person('Clancy', 'Turner', 51)
console.log(you)