import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = (country) => {
    const [weather, setWeather] = useState([])

    useEffect(() => {
        const api_key = process.env.REACT_APP_API_KEY
        const location = country.country

        axios
            .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${location}`)
            .then(response => {
                setWeather(response.data)
            })
    }, [])

    if (weather.length === 0) {
        return <></> 
    } else {
        const capital = weather.location.name
        const temp = weather.current.temperature
        const image = weather.current.weather_icons[0]
        const wind_speed = weather.current.wind_speed
        const wind_dir = weather.current.wind_dir

        return (
            <div>
                <h2>Weather in {capital}</h2>
                <b>temperature: </b>{temp} celsius <br />
                <img src={image} alt='icon' /> <br />
                <b>wind: </b>{wind_speed} mph direction {wind_dir}
            </div>
        )
    }
}

export default Weather