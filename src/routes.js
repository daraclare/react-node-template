import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Global from './components/Global';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

export default (
  <Route path="/" component={Global}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
