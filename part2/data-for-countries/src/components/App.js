import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Search from './Search'
import DisplayData from './DisplayData'

const App = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                setData(response.data)
            })
    }, [])

    return (
        <div>
            <Search search={search} setSearch={setSearch} />
            <DisplayData data={data} search={search} setSearch={setSearch} />
        </div>
    )
}

export default App