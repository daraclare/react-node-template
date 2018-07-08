import "babel-polyfill";
import React from "react";
import { ReactDOM, render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import App from "./components/App";
import "./styles/styles.css";


const store = configureStore();

//enable hot module replacement;
// eslint-disable-next-line
if (DEVELOPMENT) {
  if (module.hot) {
    module.hot.accept(App, () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(document.getElementById("root"));
        render();
      })
    );
  }
}

let ReduxRoot = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>
);

render(<ReduxRoot />, document.getElementById("root"));
