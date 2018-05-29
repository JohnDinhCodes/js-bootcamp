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
    setName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio() {
        return `${this.firstName} ${this.lastName} is a ${this.position}.`
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


const student = new Student('Jay', 'Dinh', 20, 95)

console.log(student.getBio())
console.log(student.updateGrade(-50))
console.log(student.getBio())