import React, { Component } from "react";
import "./reduxpage.css";

export default class ReduxPage extends Component {
  render() {
    return (
      <div>
        <h1 className="reduxpage">Using the Redux Template</h1>
        <p>
          To use the Redux template in this project, please use:<br />
          <code>git pull origin redux</code>
        </p>
        <p>
          Install new dependencies with <br /> <code>npm install</code>
        </p>
      </div>
    );
  }
}
