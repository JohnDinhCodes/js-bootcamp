const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modifications',
    body: 'Get a new seat'
}]

// console.log(notes.pop())
// notes.push('My new note')

// notes.unshift('my first note')

// notes.splice(1, 1, 'This is the new second item')

// notes[2] = 'This is now the new note 3'

// notes.forEach(function (note, index) {
//     console.log(index)
//     console.log(note)
// })

console.log(notes.length)
console.log(notes)

let someObject = {}
let otherObject = someObject

const index = notes.findIndex(function (note, index) {
    console.log(note)
    return note.title === 'Habbits to work on'
})

console.log(index)