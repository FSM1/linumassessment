/**
 *
 * BookForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Paper, TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: 200,
  },
};

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.Book;

    this.handleInputChange.bind(this);
    this.handleSubmitForm.bind(this);
  }

  handleInputChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.id;

    this.setState({
      [name]: value,
    });
  };

  handleSubmitForm = event => {
    event.preventDefault();
    const newBook = this.state;
    const { onSubmitAction } = this.props;
    onSubmitAction(newBook);
  };

  render() {
    const { classes } = this.props;
    const {
      isbn,
      title,
      subtitle,
      author,
      published,
      publisher,
      pages,
      quantitySold,
      price,
    } = this.state;

    return (
      <Paper>
        <form onSubmit={this.handleSubmitForm} className={classes.container}>
          <TextField
            id="isbn"
            label="ISBN"
            className={classes.textField}
            value={isbn}
            onChange={this.handleInputChange}
          />
          <TextField
            id="title"
            label="Title"
            className={classes.textField}
            value={title}
            onChange={this.handleInputChange}
          />
          <TextField
            id="subtitle"
            label="Subtitle"
            className={classes.textField}
            value={subtitle}
            onChange={this.handleInputChange}
          />
          <TextField
            id="author"
            label="Author"
            className={classes.textField}
            value={author}
            onChange={this.handleInputChange}
          />
          <TextField
            id="publisher"
            label="Publisher"
            className={classes.textField}
            value={publisher}
            onChange={this.handleInputChange}
          />
          <TextField
            id="published"
            label="Published"
            className={classes.textField}
            value={published}
            onChange={this.handleInputChange}
          />
          <TextField
            id="pages"
            label="Pages"
            className={classes.textField}
            value={pages}
            type="number"
            onChange={this.handleInputChange}
          />
          <TextField
            id="quantitySold"
            label="Quantity Sold"
            className={classes.textField}
            value={quantitySold}
            type="number"
            onChange={this.handleInputChange}
          />
          <TextField
            id="price"
            label="Price"
            className={classes.textField}
            value={price}
            type="currency"
            onChange={this.handleInputChange}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Paper>
    );
  }
}

BookForm.propTypes = {
  Book: PropTypes.object,
  classes: PropTypes.object,
  onSubmitAction: PropTypes.func.isRequired,
};

BookForm.defaultProps = {
  Book: {
    isbn: '',
    title: '',
    subtitle: '',
    author: '',
    published: new Date(),
    publisher: '',
    pages: 0,
    quantitySold: 0,
    price: 0,
  },
};

export default withStyles(styles)(BookForm);
