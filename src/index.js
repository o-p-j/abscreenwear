import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute,} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import './main.css';
import App from './App';
import Home from './pages/Home';
import Postmasters from './pages/Postmasters';
import Kahn from './pages/Kahn';
import Releases from './pages/Releases';
import Codes from './pages/Codes';
import About from './pages/About';
import Press from './pages/Press';
import Fabs from './pages/Fabs';
import Favs from './pages/Favs';
import Labs from './pages/Labs';
import Editorial from './pages/Editorial';
import SubscribeForm from './components/SubscribeForm';
import Appointment from './pages/Appointment';

var ga = require('react-ga');
ga.initialize('UA-69537137-1');

function logPageView() {
  ga.pageview(window.location.pathname);
}

render((
  <Router history={createBrowserHistory()} onUpdate={logPageView}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/signup" component={SubscribeForm}/>
      <Route path="/releases/postmasters" component={Postmasters}/>
      <Route path="/releases/kahn" component={Kahn}/>
      <Route path="/releases/:release" component={Releases}/>
      <Route path="/codes" component={Codes}/>
      <Route path="/about" component={About}/>
      <Route path="/press" component={Press}/>
      <Route path="/favs" component={Favs}/>
      <Route path="/fabs" component={Fabs}/>
      <Route path="/labs" component={Labs}/>
      <Route path="/editorial" component={Editorial}/>
      <Route path="/appointment" component={Appointment}/>
    </Route>
  </Router>
), document.getElementById('root'));
