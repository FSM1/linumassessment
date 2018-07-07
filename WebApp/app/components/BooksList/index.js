/**
 *
 * BooksList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import BookItem from 'components/BookItem/index';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
}

export class BooksList extends React.PureComponent {
  render() {
    const { books, classes } = this.props;
    console.log(books)
    return (
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
              <BookItem book={book} />
            );
          })}
        </TableBody>
      </Table>
    );
  }
}


BooksList.propTypes = {
  books: PropTypes.array,
};

export default withStyles(styles)(BooksList);
