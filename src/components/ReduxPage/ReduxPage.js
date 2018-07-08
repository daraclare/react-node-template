import React, { Component } from "react";
import PropTypes from "prop-types";
import "./reduxpage.css";

export default class ReduxPage extends Component {
  constructor() {
    super();

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.props.increment();
  }

  decrement() {
    this.props.decrement();
  }

  render() {
    return (
      <div className="reduxpage">
        <h1>React & Redux Example</h1>
        <h1>{this.props.counter}</h1>
        <button onClick={this.increment}> + </button>
        <button onClick={this.decrement}> - </button>
      </div>
    );
  }
}

ReduxPage.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
};
