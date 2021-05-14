import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import store from './redux/store';
import { Provider } from 'react-redux';
const rootEl = document.getElementById('app');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
);

if (module.hot) {
  module.hot.accept();
}
