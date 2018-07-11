/**
 *
 * BookForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import {Paper} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    margin: 20,
    padding: 20,
    maxWidth: 400
  }
}

class BookForm extends React.PureComponent {
  render() {
    const { onSubmitAction, Book } = this.props;
    return <Paper>
      <form onSubmit={onSubmitAction}>
        <label>ISBN:</label>
        <input type="text" defaultValue={Book.isbn} />
        <label>Title:</label>
        <input type="text" defaultValue={Book.title} />
        <label>Subtitle:</label>
        <input type="text" defaultValue={Book.subtitle} />
        <label>Author:</label>
        <input type="text" defaultValue={Book.author} />        
        <label>Publisher:</label>
        <input type="text" defaultValue={Book.publisher} />
        <label>Published:</label>
        <input type="date" defaultValue={Book.published} />
        <label>Pages:</label>
        <input type="number" defaultValue={Book.pages} />
        <label>Quantity Sold:</label>
        <input type="number" disabled defaultValue={Book.quantitySold} />
        <label>Price:</label>
        <input type="text" disabled defaultValue={Book.price} />
      </form>
    </Paper>;
  }
}

BookForm.propTypes = {
  Book: PropTypes.object,
  onSubmitAction: PropTypes.func.isRequired,
};

BookForm.defaultProps = {
  Book: {
    isbn: "",
    title: "",
    subtitle: "",
    author: "",
    published: "",
    publisher: "",
    pages: 0,
    quantitySold: 0,
    price: 0,
  }
};

export default withStyles(styles)(BookForm);
