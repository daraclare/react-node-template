import React from 'react';
import Header from './components/global/Header';
import { Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={HomePage}/>
        <Route path="/about" component={AboutPage}/>
      </div>
    );
  }

}
