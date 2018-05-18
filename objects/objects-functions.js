let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 328
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} - by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary =  getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

// Challenge Area 

// Create function - take fahrenheit in - return object with all three

let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit: `${fahrenheit}°F`,
        celcius: `${(fahrenheit - 32) * (5 / 9)}°C`,
        kelvin: `${(fahrenheit + 459.67) * (5 / 9)}K`
    }
}

let temps = convertFahrenheit(74)

console.log(temps.fahrenheit)
console.log(temps.celcius)
console.log(temps.kelvin)