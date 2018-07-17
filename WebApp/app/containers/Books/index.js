/**
 *
 * Books
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import * as bookActions from 'models/books/actions';
import { Paper } from '@material-ui/core';
import BooksList from 'components/BooksList/index';
import reducer from 'models/books/reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class Books extends React.Component {
  componentDidMount() {
    const { BookActions } = this.props;
    BookActions.startPollingBooks();
  }

  componentWillUnmount() {
    const { BookActions } = this.props;
    BookActions.stopPollingBooks();
  }

  render() {
    const { bookStore } = this.props;

    return (
      <Paper>
        {bookStore &&
          bookStore.books && (
        /* eslint-disable prettier/prettier */
          <BooksList books={Object.values(bookStore.books)} />
        )}
      </Paper>
    );
  }
}

Books.propTypes = {
  BookActions: PropTypes.object,
  bookStore: PropTypes.object,
};

const mapStateToProps = state => ({
  bookStore: state.bookStore,
});

function mapDispatchToProps(dispatch) {
  return {
    BookActions: bindActionCreators(bookActions, dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'bookStore', reducer });
const withSaga = injectSaga({ key: 'booksSaga', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Books);
