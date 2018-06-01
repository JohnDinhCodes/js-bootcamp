import Hangman from './hangman'
import getPuzzle from './requests'

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game

window.addEventListener('keypress', (e) => {
    if (game.status === 'playing') {
        if (e.charCode >= 97 && e.charCode <= 122) {
            game.makeGuess(e.key)
            puzzleEl.textContent = game.getPuzzle
            game.getStatus(puzzleEl)
            render()
        }
    }
})

const render = () => {
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game.statusMessage
    if (game.status === 'failed') {
        puzzleEl.classList.add('fail')
        game.word.forEach((letter) => {
            const letterEl = document.createElement('span')
            letterEl.textContent = letter
            puzzleEl.appendChild(letterEl)
        })
    } else {
        game.getPuzzle.split('').forEach((letter) => {
            const letterEl = document.createElement('span')
            letterEl.textContent = letter
            puzzleEl.appendChild(letterEl)
        })
    }
}

const startgame = async () => {
    const puzzle = await getPuzzle('2')
    game = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', () => {
    puzzleEl.classList.remove('fail')
    startgame()
})

startgame()
