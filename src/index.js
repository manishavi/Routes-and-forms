import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './components/app';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const createStoreMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
