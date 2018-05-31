class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }
    get getPuzzle() {
        let puzzle = ''

        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || (letter === ' ') || letter === '-') {
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
    }
    get statusMessage() {
        const answer = this.word.join('')
        if (this.status === 'playing') {
            return `Remaining Guesses: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Nice try! The word was "${answer}"`
        } else {
            return 'Great work! You guessed the word.'
        }
    }
}