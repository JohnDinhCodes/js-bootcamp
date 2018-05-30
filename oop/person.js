// Prototypal Inheritance
// myPerson --> Person.prototype --? Object.prototype --> null
class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })

        return bio
    }
    set fullName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio() {
        return `${this.fullName} is a ${this.position}.`
    }
    getYearsLeft() {
        return 45 - this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    getBio() {
        if (this.grade >= 70) {
            return `${this.firstName} is passing the class!`
        } else {
            return `${this.firstName} is failing the class!`
        }
    }
    updateGrade(score) {
        this.grade += score
        return `Your grade is now ${this.grade} / 100`
    }
}


const me = new Employee('Jay', 'Dinh', 20, 'Software Engineer')
me.fullName = 'Hello Kitty'
console.log(me.getBio())
