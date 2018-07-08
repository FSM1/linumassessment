/*
 *
 * Books reducer
 *
 */

import { LOAD_BOOKS_SUCCESS } from './constants';

function parseBook(book) {
  const { _id, isbn, title, subtitle, author, published, publisher, pages, description, website } = book;
  
  return {
    id: _id,
    ...book,
  }
}


export const initialState = {
  books: {},
};

function booksReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_BOOKS_SUCCESS: {
      const newBooks = {};
      action.books.forEach((book) => {
        const b = parseBook(book);
        newBooks[b.id] = b;
      });

      return {
        ...state,
        books: { ...state.books, ...newBooks },
      };
    }
    default:
      return state;
  }
}

export default booksReducer;