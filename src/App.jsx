import { useState } from 'react'
import './App.css'
import Greeting from './Greeting'
import Person from './Person'
import Clock from './Clock'

function App() {
  const [heading, setHeading] = useState('Greetings!');

  const clickHandler = () => {
    setHeading('Salutations!');
  }

  return (
    <>
    <button type='button' onClick={clickHandler}>
      Click me!
    </button>
    <h1>{heading}</h1>
    </>
  )
}

export default App
