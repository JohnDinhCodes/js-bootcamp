// DOM - Document Object Model

// const paragraph = document.querySelector('p')
// paragraph.remove()

// Query all and remove
const paragraphs = document.querySelectorAll('p')

paragraphs.forEach(function (p) {
    p.textContent = '********'
})