import React from 'react';
import './homepage.scss';

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1 className="primary">HomePage Component</h1>
          <img src={require("../../../public/images/placeholder.svg")} />
      </div>
    );
  }
}
