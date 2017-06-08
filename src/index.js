import 'babel-polyfill'; //used for ES6 features that need a polyfill, like promises & generators
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/styles.css';

if(DEVELOPMENT) { //eslint-disable-line
  if (module.hot) {
    module.hot.accept();
  }
}

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'));
