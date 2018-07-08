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

import reducer from './reducer';
import saga from './saga';
import * as bookStoreActions from './actions';

import BooksList from '../../components/BooksList/index';

/* eslint-disable react/prefer-stateless-function */
export class Books extends React.PureComponent {
  render() {
    const { bookStoreActions, bookStore } = this.props;
    console.log(bookStore);
    
    return (
      <div>
        <button onClick={() => { bookStoreActions.getBooks() }}>get books</button>
        {(bookStore && bookStore.books) && <BooksList books={Object.values(bookStore.books)} />}
      </div>
    );
  }
}

Books.propTypes = {
  bookStoreActions: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    bookStore: state.bookStore,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    bookStoreActions: bindActionCreators(bookStoreActions, dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'bookStore', reducer });
const withSaga = injectSaga({ key: 'books', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Books);
