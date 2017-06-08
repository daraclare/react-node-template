import React from 'react';
import './aboutpage.css';

export default class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h1 className="aboutpage">React Template AboutPage</h1>
        <p>React 15</p>
        <p>Webpack 2</p>
        <p>React Router 4</p>
        <p>Babel 6</p>
        <p>Mocha, Chai and Istanbul</p>
      </div>
    );
  }
}
