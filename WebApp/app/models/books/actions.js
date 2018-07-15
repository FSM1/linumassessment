/*
 *
 * Books actions
 *
 */

import { START_POLL_BOOKS, GET_BOOKS, LOAD_BOOKS_SUCCESS, LOAD_BOOKS_ERROR } from './constants';

export function getBooks() {
  return {
    type: GET_BOOKS,
  };
}

export function booksLoaded(books) {
  return {
    type: LOAD_BOOKS_SUCCESS,
    books,
  };
}

export function booksLoadingError(error) {
  return {
    type: LOAD_BOOKS_ERROR,
    error,
  };
}