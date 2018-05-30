// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done
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

// Making an HTTP request
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.srcElement.response)
        console.log(data)
    } else if (e.target.readyState == 4) {
        console.log('An error has taken place')
    }
})

request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=1')
request.send()

const countryCode = 'US'
const countryRequest = new XMLHttpRequest()

countryRequest.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.srcElement.response)
        const country = data.find((country) => country.alpha2Code === countryCode)
        console.log(country.name)
    } else if (e.target.readyState === 4) {
        console.log('Unable to fetch data')
    }
})

countryRequest.open('GET', 'https://restcountries.eu/rest/v2/all')
countryRequest.send()