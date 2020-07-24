import React from 'react'
import personService from '../services/personService'

const PersonForm = ({ persons, newName, newNumber, setPersons, setNewName, setNewNumber, setMessage, setError }) => {
    const addName = (event) => {
        event.preventDefault()
        const newPerson = {
            name: newName,
            number: newNumber
        }
        const names = persons.map(person => person.name)

        if (names.includes(newName)) {
            const confirm = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)

            if (confirm) {
                const person = persons.find(p => p.name === newName)
                const id = person.id

                personService
                    .update(id, newPerson)
                    .then(personService
                        .getAll()
                        .then(initialPersons => {
                            setPersons(initialPersons)
                        })
                    )

                setMessage(
                    `Modified ${newName}`
                )
                setTimeout(() => {
                    setMessage('')
                }, 5000)

                setNewName('')
                setNewNumber('')
            } else {
                return (
                    <form onSubmit={addName}>
                        <div>
                            name: <input
                                value={newName}
                                onChange={handleNameChange}
                            />
                        </div>
                        <div>
                            number: <input
                                value={newNumber}
                                onChange={handleNumberChange}
                            />
                        </div>
                        <div>
                            <button type="submit">add</button>
                        </div>
                    </form>
                )
            }
        } else {
            let err = false

            personService
                .create(newPerson)
                .then(personService
                    .getAll()
                    .then(initialPersons => {
                        setPersons(initialPersons)
                    })
                )
                .catch(error => {
                    console.log(JSON.stringify(error.response.data))
                    err = true
                    setMessage(
                        `${JSON.stringify(error.response.data)}`
                    )
                    setTimeout(() => {
                        setMessage('')
                    }, 5000)

                    setNewName('')
                    setNewNumber('')
                })

            if (!err) {
                setMessage(
                    `Added ${newName}`
                )
                setTimeout(() => {
                    setMessage('')
                }, 5000)
    
                setNewName('')
                setNewNumber('')
            }
            
            err = false
        }
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    return (
        <form onSubmit={addName}>
            <div>
                name: <input
                    value={newName}
                    onChange={handleNameChange}
                />
            </div>
            <div>
                number: <input
                    value={newNumber}
                    onChange={handleNumberChange}
                />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm