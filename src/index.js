/* eslint-disable no-console */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import {Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


render(
  // <Provider store={store}>
    <Router history={browserHistory} routes={routes} />,
  // </Provider>,
  document.getElementById('app')
);
