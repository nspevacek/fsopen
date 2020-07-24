import React from 'react'
import Person from './Person'

const Persons = ({ persons, setPersons, filter, setError }) => {
    return (
        <div>
            {
                persons.map(person =>
                    <Person key={person.name} name={person.name} number={person.number} filter={filter} id={person.id} persons={persons} setPersons={setPersons} setError={setError} />
                )
            }
        </div>
    )
}

export default Persons