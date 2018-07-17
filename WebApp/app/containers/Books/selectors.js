import { createSelector } from 'reselect';

/**
 * Direct selector to the books state domain
 */

const selectBooksDomain = () => state => state.booksStore;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Books
 */

const makeSelectBooks = () =>
  createSelector(selectBooksDomain(), book => {
    const books = Object.values(book);

    return books;
  });

export default makeSelectBooks;
