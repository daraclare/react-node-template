import React, { Component } from 'react';
import axios from 'axios';

export default class ReduxPage extends Component {

  constructor() {
    super();
    this.state ={
      data: []
    };
  }

  // componentWillMount is called the first time component is loaded, but before it is added to the dom
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
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
            return <p key={index}>{data.name}: <a href={data.email}>{data.email}</a></p>;
        })}

      </div>
    );
  }
}
