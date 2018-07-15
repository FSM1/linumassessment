/**
 *
 * BooksList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@material-ui/core';

import BookItem from 'components/BookItem/index';

const styles = {
  root: {    
    overflowX: 'auto',
  },
  table: {
    maxWidth: 700,
  },
}

export class BooksList extends React.PureComponent {
  render() {
    const { books, classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>ISBN</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map(book => {
              return (
                <BookItem book={book} key={book.id} />
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}


BooksList.propTypes = {
  books: PropTypes.array.isRequired,
};

export default withStyles(styles)(BooksList);
