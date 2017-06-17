import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import './styles/styles.css';

//enable hot module replacement;
if(DEVELOPMENT) { //eslint-disable-line
  if (module.hot) {
    module.hot.accept();
  }
}

render(
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>, document.getElementById('root'));
