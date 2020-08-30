import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
  <button onClick = {handleClick}> {text} </button>
)

const Statistic = ({value, text}) => {
  return (<tr> <td>{text}</td> <td>{value}</td> </tr>)
}

const Statistics = ({good, neutral, bad, total}) => {
  if (total === 0) {
    return (<div>No feedback given</div>)
  } else {
    return (
      <div> 
        <Statistic text = "good" value = {good} />
        <Statistic text = "neutral" value = {neutral} />
        <Statistic text = "bad" value = {bad} />
        <Statistic text = "all" value = {total} />
        <Statistic text = "average" value = {((good * 1) + (bad * -1)) / total} />
        <Statistic text = "average" value = {(good / total * 100) + " %"} />
      </div>  
    )
  }
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad

  const handleBad = () => {
    setBad (bad + 1)
  }

  const handleNeutral = () => {
    setNeutral (neutral + 1)
  }

  const handleGood = () => {
    setGood (good + 1)
  }

  
  return (
    <div>
      <h1>give feedback</h1> 

      <div>
        <Button handleClick = {handleGood} text = "good" />
        <Button handleClick = {handleNeutral} text = "neutral" />
        <Button handleClick = {handleBad} text = "bad" />
      </div>

      <h1>statistics</h1>

      <Statistics good = {good} neutral = {neutral} bad = {bad} total = {total} />
    
    </div>

  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)