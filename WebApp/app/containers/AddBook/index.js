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
import saga from './saga';
import {Paper} from '@material-ui/core';
import BookForm from 'components/BookForm/index';
import * as addBookActions from './actions';

/* eslint-disable react/prefer-stateless-function */
export class AddBook extends React.PureComponent {
  render() {
    const { addBookActions } = this.props;
    return <Paper>
      <BookForm onSubmitAction={addBookActions.addBook} />
    </Paper>;
  }
}

AddBook.propTypes = {
  addBookActions: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    addBookActions: bindActionCreators(addBookActions, dispatch),
  };
}

const withConnect = connect(
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'addBook', saga });

export default compose(
  withSaga,
  withConnect,
)(AddBook);
