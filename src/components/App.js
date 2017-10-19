import React from "react";
import Header from "./global/Header";
import { Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import ReduxPage from "./ReduxPage/ReduxPage";
import ApiPage from "./ApiPage/ApiPage";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/redux" component={ReduxPage} />
        <Route path="/api" component={ApiPage} />
      </div>
    );
  }
}
