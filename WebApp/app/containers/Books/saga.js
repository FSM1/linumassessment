import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_BOOKS } from './constants';
import { booksLoaded, booksLoadingError } from './actions';
import request from 'utils/request';

// Individual exports for testing
export function* getBooks() {
  const requestURL = 'http://localhost:3001/api/Books';

  try {
    const books = yield call(request, requestURL);
    yield put(booksLoaded(books));
  } catch (err) {
    yield put(booksLoadingError(err));
  }
}

export default function* watchGetBooks() {
  yield takeLatest(GET_BOOKS, getBooks)
}