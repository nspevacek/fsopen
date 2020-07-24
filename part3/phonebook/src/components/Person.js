import React from 'react'
import personService from '../services/personService'

const Person = ({ name, number, filter, id, setPersons, setError }) => {
  const deletePerson = () => {
    const confirm = window.confirm(`Delete ${name} ?`)

    if (confirm) {
      personService
        .remove(id)
        .then(
          personService
            .getAll()
            .then(initialPersons => {
              setPersons(initialPersons)
            })
        )
        .catch(error => {
          setError(
            `Information of ${name} has already been removed from server`
          )
          setTimeout(() => {
            setError('')
          }, 5000)
        })
    }
  }

  if (!name.toLowerCase().includes(filter.toLowerCase())) return (<></>)

  return (
    <>
      {name + ' ' + number}
      <button onClick={() => deletePerson()}>delete</button>
      <br />
    </>
  )
}

export default Person