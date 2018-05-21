const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office modifications',
    body: 'Get a new seat'
}]

// DOM - Document Object Model

// const paragraph = document.querySelector('p')
// paragraph.remove()

// Query all and remove
const paragraphs = document.querySelectorAll('p')

paragraphs.forEach(function (p) {
    p.textContent = '********'
})

// Add a new element
const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element from JavaScript'
document.querySelector('body').appendChild(newParagraph)