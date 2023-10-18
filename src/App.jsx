import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Greeting'

function App() {
  const [count, setCount] = useState(0)

  const greetings = [
    {
      id: "cowboy",
      start: "Howdy!",
      end: ", pard'ner!"
    },
    {
      id: "elvis",
      start: "Good evening, ladies and gentlemen.",
      end: ". Thank you, thank you very much."
    },
    {
      id: "tigger",
      start: "Yohoohoohoo!",
      end: ", ta-ta for now!"
    }
  ];

  return (
    <>
      {greetings.map(greeting => {
        return (
        <Greeting
          key={greeting.id}
          start={greeting.start}
          end={greeting.end}
         />
        )
      })}
    </>
  )
}

export default App
