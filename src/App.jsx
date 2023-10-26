import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from "react-router-dom";
import './App.css';
import Greeting from './Greeting';
import Person from './Person';
import Clock from './Clock';

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
    <Greeting start="Howdy!" />
    <Clock />

    <h2>Sitelinks:</h2>
    <ul>
      <li><Link to='profile'>Profile Page</Link></li>
    </ul>
    </>
  )
}

export default App
