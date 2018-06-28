/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import Typography from '@material-ui/core/Typography';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <h1>        
        <Typography>Hi from homepage component</Typography>
      </h1>
    );
  }
}
