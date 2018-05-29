// 1. Display the puzzle to the browserinstead of the console
// 2. Display the guesses left to the browser instead of console
// 3. Seperate the Hangman definition from the rest of the app code (use app.js)


const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'playing'
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
}

Hangman.prototype.getStatus = function (puzzleEl) {
    if (this.remainingGuesses <= 0) {
        this.status = 'failed'
    } else if (this.remainingGuesses > 0 && !puzzleEl.textContent.includes('*')) {
        this.status = 'finished'
    }
    console.log(this.status)
}