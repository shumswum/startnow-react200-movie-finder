import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './rootReducer';
import promiseMiddleware from 'redux-promise-middleware';
import App from './app';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(
  applyMiddleware(
    promiseMiddleware()
  )
));
/* eslint-enable */


render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);