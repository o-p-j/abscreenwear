import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute,} from 'react-router';
import App from './App';
import createBrowserHistory from 'history/lib/createBrowserHistory';    

import Screenwear from './pages/Screenwear';
import Releases from './pages/Releases';
import Codes from './pages/Codes';
import About from './pages/About';
import Editorial from './pages/Editorial';

import './main.css';

var ga = require('react-ga');
ga.initialize('UA-69537137-1');

function logPageView() {
  ga.pageview(window.location.pathname);
}

render((
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App} onUpdate={logPageView}>
      <IndexRoute component={Screenwear}/>
      <Route path="/releases" component={Releases}/>
      <Route path="/codes" component={Codes}/>
      <Route path="/about" component={About}/>
      <Route path="/editorial" component={Editorial}/>
    </Route>
  </Router>
), document.getElementById('root'));
