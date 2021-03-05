import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import HomePage from './components/HomePage/HomePage.js';
import Account from './components/Account/Account.js';
import MainApp  from './components/MainApp/MainApp.js';
import Page404  from './components/Page404/Page404.js';
import TermsOfUseAndPrivacyPolicy  from './components/TermsOfUseAndPrivacyPolicy/TermsOfUseAndPrivacyPolicy.js';
import FAQ  from './components/FAQ/FAQ.js';

import Landing  from './components/Landing/Landing.js';
import AboutUs  from './components/AboutUs/AboutUs.js';
import Contact  from './components/Contact/Contact.js';

import ComingSoon from './components/ComingSoon/ComingSoon';
import NoInternet from './components/NoInternet/NoInternet';

import './App.css';
import ChartJS from './components/ChartDemos/Chart.js';
import ApexChartsDemo from './components/ChartDemos/ApexCharts.js';

function App() {
  
  return (
    <>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path='/account' exact component={Account} />
      <Route path='/app' component={MainApp} />

      <Route path='/landing' exact component={Landing} />
      <Route path='/about' exact component={AboutUs} />
      <Route path='/terms' exact component={TermsOfUseAndPrivacyPolicy} />
      <Route path='/contact' exact component={Contact} />
      <Route path='/faq' exact component={FAQ} />
      
      <Route path='/coming-soon' exact component={ComingSoon} />
      <Route path='/no-internet' exact component={NoInternet} />

      <Route path='/chartjs' exact component={ChartJS} />
      <Route path='/apex-charts' exact component={ApexChartsDemo} />

      <Route path='*' component={Page404} />

    </Switch>

    </>
  );
}

export default App;
