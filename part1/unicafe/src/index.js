import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ message }) => {
  return (
    <div>
      <h1>
        {message}
      </h1>
    </div>
  )
}

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistics = ({ good, neutral, bad, all }) => {
  if (all === 0) {
    return (
      <div>
        <p>
          No feedback given
        </p>
      </div>
    )
  }

  const average = () => {
    return (good - bad) / (all)
  }

  const positive = () => {
    return (good / all) * 100
  }

  return (
    <div>
      <table>
        <tbody>
          <tr><Statistic text='good' value={good} /></tr>
          <tr><Statistic text='neutral' value={neutral} /></tr>
          <tr><Statistic text='bad' value={bad} /></tr>
          <tr><Statistic text='average' value={average()} /></tr>
          <tr><Statistic text='positive' value={positive()} /></tr>
        </tbody>
      </table>
    </div>
  )
}

const Statistic = ({ text, value }) => {
  return (
    <>
      <td>{text}</td>
      <td>{value}</td>
    </>
  )
}

const App = () => {
  const feedback = 'give feedback'
  const statistics = 'statistics'

  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setAll(all + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  return (
    <div>
      <Header message={feedback} />
      <Button text='good' handleClick={handleGood} />
      <Button text='neutral' handleClick={handleNeutral} />
      <Button text='bad' handleClick={handleBad} />
      <Header message={statistics} />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
