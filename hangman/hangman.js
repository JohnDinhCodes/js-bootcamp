const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''
    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter)) {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })
    return puzzle
}

Hangman.prototype.makeGuess = function (letter) {

    letter = letter.toLowerCase()

    const isUnique = !this.guessedLetters.includes(letter)
    const isBadGuess = !this.word.includes(letter)
    if (isUnique) {
        this.guessedLetters.push(letter)
    }

    if (isUnique && isBadGuess) {
        this.remainingGuesses--
    }
    return game1.getPuzzle()

}

const game1 = new Hangman('Cat', 2)
console.log(game1.getPuzzle())

window.addEventListener('keypress', (e) => {
    if (e.charCode >= 97 && e.charCode <= 122) {
        console.log(game1.makeGuess(e.key))
        console.log(game1.remainingGuesses)
    }
})