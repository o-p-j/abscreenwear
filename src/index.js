import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { Router, Route, IndexRoute } from 'react-router';

import Codes from './pages/Codes';
import About from './pages/About';

import './main.css';


render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Codes} />
      <Route path="/about" component={About} />
    </Route>
  </Router>
), document.getElementById('root'));
