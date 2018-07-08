import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ItemList extends Component {
  componentDidMount() {
    this.props.fetchData("/data.json");
  }

  render() {
    return (
      <div className="reduxpage">
        <h1>React & Redux API Example</h1>

        <h4>
          The below is called from a data.json file in the <code>public</code>{" "}
          folder
        </h4>

        {this.props.apiData.map((data, index) => {
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

ItemList.propTypes = {
  fetchData: PropTypes.func.isRequired,
  apiData: PropTypes.array.isRequired
};
