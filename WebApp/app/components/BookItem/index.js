/**
 *
 * BookItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

/* eslint-disable react/prefer-stateless-function */
class BookItem extends React.PureComponent {
  render() {
    const { book } = this.props;
    return (
      <TableRow key={book.id}>
        <TableCell component="th" scope="row">
          {book.title}
        </TableCell>
        <TableCell numeric>{book.isbn}</TableCell>
      </TableRow>
    );
  }
}

BookItem.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookItem;
