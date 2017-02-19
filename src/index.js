import 'babel-polyfill'; //used for ES6 features that need a polyfill, like promises & generators
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router'; //browserHistory handles browser history and gives clean URLs
import routes from './routes';
import HomePage from './components/HomePage';
import './styles/styles.css';
require("typeface-open-sans");

render(
  <Router history={browserHistory} routes={routes} />, document.getElementById('app')
);
