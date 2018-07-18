/*
 *
 * AddBook actions
 *
 */

import { ADD_BOOK, ADD_BOOK_SUCCESS, ADD_BOOK_ERROR } from './constants';

export function addBook(book) {
  return {
    type: ADD_BOOK,
    payload: { book },
  };
}

export function addBookSuccess(book) {
  return {
    type: ADD_BOOK_SUCCESS,
    payload: { book },
  };
}

export function addBookError(error) {
  return {
    type: ADD_BOOK_ERROR,
    error,
  };
}
