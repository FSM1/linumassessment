/*
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/index';
import NotFoundPage from 'containers/NotFoundPage/index';
import Typography from '@material-ui/core/Typography';

export default function App() {
  return (
    <div>
      <Typography>Hi from App</Typography>
      <Switch>        
        <Route exact path="/" component={HomePage} />         
        <Route component={NotFoundPage} />        
      </Switch>
    </div>
  );
}
