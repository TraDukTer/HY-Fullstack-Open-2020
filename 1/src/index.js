import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const Display = ({ counter }) => <div><p>{counter}</p></div>


const Button = ({handleClick, text}) =>  (
   <button onClick={handleClick}>
     {text}
   </button>
 )


const App = (props) => {
  const [ counter, setCounter ] = useState(0)
  
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )

  const name = 'Peter'
  const age = counter
  
  console.log('rendering...', counter)

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      
      <Display counter={counter}/>

          <Button
        handleClick={increaseByOne}
        text={'add to ' + counter}
      />
      <Button
        handleClick={setToZero}
        text='zero'
      />     
      <Button
        handleClick={decreaseByOne}
        text={'subtract from ' + counter}
      /> 
    </div>
  )
}


ReactDOM.render(<App />, 
  document.getElementById('root'))
