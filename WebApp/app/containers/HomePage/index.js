/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import Typography from '@material-ui/core/Typography';

const headingStyle = {
  margin: "auto",
  align: "center",
  textAlign:"center"
}

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <Typography variant="subheading" style={headingStyle} align={"center"}>Welcome to the Books DB</Typography>
        <Typography>View Books</Typography>
        <Typography>Add a book</Typography>
      </div>
    );
  }
}
