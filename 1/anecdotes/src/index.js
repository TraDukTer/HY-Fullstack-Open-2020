import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const random = (max) => {
  const rand = (Math.round(Math.random() * max))

  console.log("random number from 0 to " + max + ": " + rand)
  return (rand)
}

const Anecdote = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
      {anecdotes[props.number]}
      <br />
      has {props.votes[props.number]} votes. 
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const handleNew = () => {
    setSelected(random(anecdotes.length-1))
  }

  const handleVote = () => {
    const copyOfVotes = [...votes]
    copyOfVotes[selected] += 1
    

    console.log("votes: ", copyOfVotes)
    console.log("largest number of votes: ", Math.max(...copyOfVotes))
    console.log("index of largest number of votes: ", copyOfVotes.indexOf(Math.max(...copyOfVotes)))
    setVotes(copyOfVotes)
  }

  return (
    <div>
      <div>
        {anecdotes.length} anecdotes
      </div>
      <Anecdote votes = {votes} number = {selected} text = "Anecdote of the day"/>

      <Anecdote votes = {votes} number = {votes.indexOf(Math.max(...votes))} text = "Anecdote with most votes"/>
    

      <div>
        <button onClick = {handleVote}>vote</button>
        <button onClick = {handleNew}>next anecdote</button>
      </div>
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
