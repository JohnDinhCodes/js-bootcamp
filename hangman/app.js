const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('bitch', 2)

puzzleEl.textContent = game1.getPuzzle()
guessesEl.textContent = game1.remainingGuesses

window.addEventListener('keypress', (e) => {
    if (e.charCode >= 97 && e.charCode <= 122) {
        game1.makeGuess(e.key)
        game1.remainingGuesses
        puzzleEl.textContent = game1.getPuzzle()
        guessesEl.textContent = game1.remainingGuesses  
        game1.getStatus(puzzleEl)      
    }
})