/*
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import HomePage from 'containers/HomePage/index';
import NotFoundPage from 'containers/NotFoundPage/index';
import Books from 'containers/Books/index';
import AddBook from 'containers/AddBook/index';

const styles = {
  root: {
    flexGrow: 1,
  },
  appBar: {
    margin: 'auto',
    align: 'center',
    textAlign: 'center',
  },
};

/* eslint-disable react/prefer-stateless-function */
export class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography
              variant="title"
              color="inherit"
              className={classes.appBar}
            >
              Books
            </Typography>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/add" component={AddBook} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(App);
