import React from 'react'
import { Route } from 'react-router-dom'

import HomePage from './components/HomePage/HomePage.js';
import Account from './components/Account/Account.js';
import './App.css';

function App() {
  
  return (
    <>
    <Route path="/" exact component={HomePage} />
    <Route path='/account' exact component={Account} />
    </>
  );
}

export default App;
