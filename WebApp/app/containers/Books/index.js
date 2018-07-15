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
import saga from './saga';
import reducer from './reducer';
import * as bookStoreActions from 'models/books/actions';
import {Paper} from '@material-ui/core';
import BooksList from 'components/BooksList/index';

/* eslint-disable react/prefer-stateless-function */
export class Books extends React.Component {
  constructor(props) {
    super(props);   
  }
  
  componentDidMount() {
    console.log("hi");
    this.props.bookStoreActions.startPollingBooks();
  }

  componentWillUnmount() {
    this.props.bookStoreActions.stopPollingBooks();
  }

  render() {
     const { bookStore } = this.props;
    
    return (
      <Paper>
        {(bookStore && bookStore.books) && <BooksList books={Object.values(bookStore.books)} />}
      </Paper>
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
