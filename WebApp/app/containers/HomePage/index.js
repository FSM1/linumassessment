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
        <Typography variant="heading">Welcome to the Books DB</Typography>
        <Typography>View Books</Typography>
        <Typography>Add a book</Typography>
      </h1>
    );
  }
}
