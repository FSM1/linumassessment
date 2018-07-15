import { call, put, takeLatest } from 'redux-saga/effects';
import { ADD_BOOK } from 'models/books/constants';
import { addBookSuccess, addBookError } from 'models/books/actions';
import { addBook } from 'utils/api';
import { push } from 'react-router-redux';

// Individual exports for testing
export function* postBook(action) {
  try {
    const newBook = yield call(addBook, action.payload.book)
    yield put(addBookSuccess(newBook));
    yield put(push(`/books`)); //TODO: make a book details page and redirect there
  } catch (err) {
    yield put(addBookError(err));
  }
}

export default function* watchAddBook() {
  yield takeLatest(ADD_BOOK, postBook)
}