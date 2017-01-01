/**
 * Created by kingsley on 12/21/16.
 */
import React from 'react';
import {Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/Homepage';
import UserLogin from './components/user/LoginPage';
import AboutPage from './components/about/AboutPage';

export default (
  <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route  path="about" component={AboutPage}/>
      <Route path="login" component={UserLogin}/>
  </Route>
);
