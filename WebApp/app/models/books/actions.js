/*
 *
 * Books actions
 *
 */

import { START_POLL_BOOKS, GET_BOOKS, LOAD_BOOKS_SUCCESS, LOAD_BOOKS_ERROR, STOP_POLL_BOOKS, ADD_BOOK, ADD_BOOK_ERROR, ADD_BOOK_SUCCESS } from './constants';

export function startPollingBooks() {
  return {
    type: START_POLL_BOOKS,
  };
}

export function stopPollingBooks() {
  return {
    type: STOP_POLL_BOOKS,
  };
}

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

export function addBook(book) {
  return {
    type: ADD_BOOK,
    payload: { book },
  };
}

export function addBookSuccess(book) {
  return {
    type: ADD_BOOK_SUCCESS,
    payload: { book }
  };
}

export function addBookError(error) {
  return {
    type: ADD_BOOK_ERROR,
    error,
  };
}