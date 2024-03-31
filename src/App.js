import './App.css';
import HomePage from './Components/HomePage';
import {appRoutes} from './routes';
import {useRoutes} from 'react-router-dom';
import React, { useState } from 'react';

function App() {
  const element = useRoutes(appRoutes);
  // const [isLogged, setLoggedIn] = useState(localStorage.getItem('IsLogin'));
 
  return (
    <div className="App">
      <HomePage/>
      {element}
    </div>
  );
}

export default App;
