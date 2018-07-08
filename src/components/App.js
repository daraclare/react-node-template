import React, { Component } from "react";
import Header from "./global/Header";
import { Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import ReduxPageContainer from "./ReduxPage/ReduxPageContainer";
import ApiPageContainer from "./ApiPage/ApiPageContainer";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/redux" component={ReduxPageContainer} />
        <Route path="/api" component={ApiPageContainer} />
      </div>
    );
  }
}
