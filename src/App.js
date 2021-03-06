import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import HomePage from './components/HomePage/HomePage.js';
import Account from './components/Account/Account.js';
import MainApp  from './components/MainApp/MainApp.js';
import Page404  from './components/Page404/Page404.js';

import Landing  from './components/Landing/Landing.js';
import AboutUs  from './components/AboutUs/AboutUs.js';
import PrivacyPolicy  from './components/PrivacyPolicy/PrivacyPolicy.js';

import './App.css';

function App() {
  
  return (
    <>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path='/account' exact component={Account} />
      <Route path='/app' component={MainApp} />

      <Route path='/landing' exact component={Landing} />
      <Route path='/about' exact component={AboutUs} />
      <Route path='/privacy' exact component={PrivacyPolicy} />

      <Route path='*' component={Page404} />

    </Switch>

    </>
  );
}

export default App;
