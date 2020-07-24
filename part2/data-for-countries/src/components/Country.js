import React from 'react'
import Weather from './Weather'

const Country = ({ country }) => {
    if (country != null) {
        return (
            <div>
                <h1>{country.name}</h1>
                capital {country.capital} <br />
                population {country.population}
                <h2>languages</h2>
                <ul>
                    {country.languages.map(lang =>
                        <li key={lang.name}>
                            {lang.name}
                        </li>
                    )}
                </ul>
                <img src={country.flag} alt="flag" />
                <Weather country={country.name} />
            </div>
        )
    } else return (<></>)
}

export default Country