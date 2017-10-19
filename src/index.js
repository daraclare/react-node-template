import "babel-polyfill";
import React from "react";
import { ReactDOM, render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./components/App";
import "./styles/styles.css";

//enable hot module replacement;
// eslint-disable-next-line
if (DEVELOPMENT) {
  if (module.hot) {
    // Setup hot module replacement
    module.hot.accept(App, () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(document.getElementById("root"));
        render();
      })
    );
  }
}

render(
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>,
  document.getElementById("root")
);
