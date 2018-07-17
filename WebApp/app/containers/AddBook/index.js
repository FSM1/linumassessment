/**
 *
 * AddBook
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import injectSaga from 'utils/injectSaga';
import { Paper } from '@material-ui/core';
import BookForm from 'components/BookForm/index';
import * as bookActions from 'models/books/actions';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class AddBook extends React.PureComponent {
  render() {
    const { BookActions } = this.props;

    return (
      <Paper>
        <BookForm
          onSubmitAction={book => {
            BookActions.addBook(book);
          }}
        />
      </Paper>
    );
  }
}

AddBook.propTypes = {
  BookActions: PropTypes.object,
};

function mapDispatchToProps(dispatch) {
  return {
    BookActions: bindActionCreators(bookActions, dispatch),
  };
}

const withConnect = connect(mapDispatchToProps);
const withSaga = injectSaga({ key: 'addBook', saga });

export default compose(
  withSaga,
  withConnect,
)(AddBook);
