import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ItemList extends Component {

  componentDidMount() {
    this.props.fetchData('https://jsonplaceholder.typicode.com/users');
  }

  render() {

    return (
      <div className="reduxpage">

        <h1>React & Redux API Example</h1>

        {this.props.apiData.map((data, index) => {
          return <p key={index}>{data.name}: <a href={data.email}>{data.email}</a></p>;
        })}

      </div>
      );

  }
}

ItemList.propTypes = {
  fetchData: PropTypes.func.isRequired,
  apiData: PropTypes.array.isRequired
};
