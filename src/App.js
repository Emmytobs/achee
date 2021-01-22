import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import HomePage from './components/HomePage/HomePage.js';
import Account from './components/Account/Account.js';
import MainApp  from './components/MainApp/MainApp.js';
import Page404  from './components/Page404/Page404.js';

import './App.css';

function App() {
  
  return (
    <>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path='/account' exact component={Account} />
      <Route path='/app' component={MainApp} />
      
      {/* <Route path='/404' component={Page404} /> */}

      <Route path='*' component={Page404}>
          {/* <Redirect to='404' /> */}
      </Route>
    </Switch>

    </>
  );
}

export default App;
