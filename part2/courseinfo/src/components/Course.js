import React from 'react'

const Course = ({course}) => {
    return (
      <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      </>
    )
  }
  
  const Header = ({name}) => {
    return (
      <div>
        <h1>
          {name}
        </h1>
      </div>
    )
  }
  
  const Part = ({name, exercises}) => {
    return (
      <div>
        <p>
          {name} {exercises}
        </p>
      </div>
    )
  }
  
  const Content = ({parts}) => {
    return (
      <div>
        {parts.map(part =>
          <Part key={part.id} name={part.name} exercises={part.exercises} />
          )}
      </div>
    )
  }
  
  const Total = ({parts}) => {
    let initial = 0
  
    const total = parts.reduce((acc, curr) => {
      return acc + curr.exercises
    }, initial)
  
    return (
      <div>
        <p>
          <b>total of {total} exercises</b>
        </p>
      </div>
    )
  }
  
  export default Course