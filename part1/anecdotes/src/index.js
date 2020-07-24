import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({text}) => {
  return (
    <h1>
      {text}
    </h1>
  )
}

const Button = ({text, handleClick}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0])

  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  var max = votes[0]
  var maxIndex = 0

  for (var i = 1; i < votes.length; i++) {
    if (votes[i] > max) {
      maxIndex = i
      max = votes[[i]]
    }
  }

  return (
    <div>
      <Header text='Anecdote of the day' />
      {props.anecdotes[selected]} <br />
      has {votes[selected]} votes <br />
      <Button text='vote' handleClick={handleVote} />
      <Button text='next anecdote' handleClick={() => setSelected(Math.floor(Math.random() * 5))} />
      <Header text='Anecdote with most votes' />
      {props.anecdotes[maxIndex]} <br />
      has {max} votes
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)