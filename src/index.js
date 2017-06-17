import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/App';
import './styles/styles.css';

const store = configureStore();

//enable hot module replacement;
if(DEVELOPMENT) { //eslint-disable-line
  if (module.hot) {
    module.hot.accept();
  }
}

render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
