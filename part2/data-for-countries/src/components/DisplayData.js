import React from 'react'
import Country from './Country'

const DisplayData = ({ data, search, setSearch }) => {
    const names = data.map(country => country.name)
    const matches = names.filter(name => name.toLowerCase().includes(search.toLowerCase()))

    const handleClick = (match) => {
        const index = names.indexOf(matches[match])
        setSearch(matches[match])

        return showCountry(index)
    }

    const showCountry = (index) => {
        return (
            <div>
                <Country country={data[index]} />
            </div>
        )
    }

    if (matches.length > 10) {
        return ('Too many matches, specify another filter')
    } else if (matches.length <= 10 && matches.length > 1) {
        return (
            <div>
                {matches.map(name => (
                    <span key={name}>
                        {name} <button onClick={() => handleClick(matches.indexOf(name))}>show</button>
                        <br />
                    </span>)
                    )
                }
            </div>
        )
    } else {
        const index = names.indexOf(matches[0])
        
        return showCountry(index)
    }
}

export default DisplayData