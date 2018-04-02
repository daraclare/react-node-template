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
        <Route exact path="/react-node-template/" component={HomePage} />
        <Route exact path="/react-node-template/redux" component={ReduxPage} />
        <Route exact path="/react-node-template/api" component={ApiPage} />
      </div>
    );
  }
}
