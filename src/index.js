import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom'

import './index.css';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const createStoreMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreMiddleware(reducers)}>
    <BrowserRouter>
      <div>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
