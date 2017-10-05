import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import combinedReducer from "./reducers/index";
import { reduxFirebase } from "react-redux-firebase";
import firebaseCredentials from "./constants/apiKeys.js";
import { HashRouter } from "react-router-dom";
import styles from "./styles/styles.css";

const createStoreWithFirebaseMiddleware = compose(
  reduxFirebase(firebaseCredentials)
)(createStore);

const store = createStoreWithFirebaseMiddleware(
  combinedReducer
);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>,
  document.getElementById("react-app-root")
);
