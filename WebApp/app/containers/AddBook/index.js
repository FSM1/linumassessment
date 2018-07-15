/**
 *
 * AddBook
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import saga from './saga';
import reducer from './reducer';
import * as addBookActions from './actions';
import { Paper } from '@material-ui/core';
import BookForm from 'components/BookForm/index';

/* eslint-disable react/prefer-stateless-function */
export class AddBook extends React.PureComponent {
  render() {
    const { dispatch } = this.props;
    
    return (
    <Paper>
      <BookForm onSubmitAction={(book) => {dispatch(addBookActions.addBook(book));}}/>
    </Paper>
    );
  }
}

AddBook.propTypes = {
  addBookActions: PropTypes.object,
};

function mapDispatchToProps(dispatch) {
  return {
    //addBookActions: bindActionCreators(addBookActions, dispatch),
    dispatch
  };
}

const withConnect = connect(
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'addBook', saga });
const withReducer = injectReducer({ key: 'addBook', reducer });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AddBook);
