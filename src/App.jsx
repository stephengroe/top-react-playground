import PropTypes from 'prop-types';
import { useState, createContext } from 'react';
import { Link } from "react-router-dom";
import './App.css';
import Greeting from './Greeting';
import Person from './Person';
import Clock from './Clock';

export const AppContext = createContext({
  darkMode: null,
  userName: '',
});

function App() {
  const [heading, setHeading] = useState('Greetings!');
  const [userName, setUserName] = useState('Stephen');
  const [darkMode, setDarkMode] = useState(false);

  const clickHandler = () => {
    setHeading('Salutations!');
  }

  return (
    <AppContext.Provider value={{ darkMode, userName }}>
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
    </AppContext.Provider>
  )
}

export default App
