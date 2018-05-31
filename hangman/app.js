const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Jay-Dinh', 2)

puzzleEl.textContent = game1.getPuzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', (e) => {
    if(game1.status === 'playing') {
        if (e.charCode >= 97 && e.charCode <= 122) {
            game1.makeGuess(e.key)
            puzzleEl.textContent = game1.getPuzzle
            game1.getStatus(puzzleEl)
            guessesEl.textContent = game1.statusMessage          
        }
    }
})

getPuzzle('1').then((puzzle) => {
    console.log(puzzle)
}).catch((err) => {
    console.log(`Error: ${err}`)
})


getLocation().then((location) => {
    return getCountry(location.country)
}).then((country) => {
    console.log(country)
}).catch((err) => {
    console.log(`Error: ${err}`)
})