import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import combinedReducer from './reducers/index';

const store = createStore(
  combinedReducer,
  applyMiddleware(
    thunkMiddleware)
);

ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider>,
  document.getElementById("react-app-root")
);
