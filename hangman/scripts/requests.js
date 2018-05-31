const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to fetch puzzle')
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    return getCountry(location.country)
}

const getCountry = async (countryCode) => {
    const response = await fetch(`https://restcountries.eu/rest/v2/all`)

    if (response.status === 200) {
        let data = await response.json()
        
        data = data.find((country) => {
            return country.alpha2Code === countryCode
        })

        return data

    } else {
        throw new Error('Unable to fetch country')
    }
}

const getLocation = async () => {
    const response = await fetch('http://ipinfo.io/json?token=7dee97d6371ef9')

    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error('Unable to fetch location')
    }
}


