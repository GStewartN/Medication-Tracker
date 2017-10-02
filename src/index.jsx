import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import combinedReducer from './reducers/index';
import { reduxFirebase } from 'react-redux-firebase';
import firebaseCredentials from './constants/apiKeys.js';

const createStoreWithFirebaseMiddleware = compose(
  reduxFirebase(firebaseCredentials)
)(createStore);

const store = createStoreWithFirebaseMiddleware(
  combinedReducer
);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('react-app-root')
);
