import React, { Component } from "react";
import axios from "axios";

export default class ApiPage extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios.get("/data.json").then(response => {
      this.setState({
        data: response.data
      });
    });
  }

  render() {
    return (
      <div className="reduxpage">
        <h1>React API Example</h1>

        {this.state.data.map((data, index) => {
          return (
            <p key={index}>
              {data.name}: <a href={`mailto:${data.email}`}>{data.email}</a>
            </p>
          );
        })}
      </div>
    );
  }
}
