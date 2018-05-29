// 1. Display the puzzle to the browserinstead of the console
// 2. Display the guesses left to the browser instead of console
// 3. Seperate the Hangman definition from the rest of the app code (use app.js)


class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }
    getPuzzle() {
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
    makeGuess(letter) {
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
    getStatus(puzzleEl) {
        if (this.remainingGuesses <= 0) {
            this.status = 'failed'
            puzzleEl.textContent = this.word.join('')
        } else if (this.remainingGuesses > 0 && !puzzleEl.textContent.includes('*')) {
            this.status = 'finished'
        }
        console.log(this.status)
    }
    statusMessage() {
        const answer = this.word.join('')
        if (this.status === 'playing') {
            return `Remaining Guesses: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Nice try! The word was "${answer}"`
        } else {
            return 'Great work! you guessed the word.'
        }
    }
}