import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_BOOKS } from 'containers/Books/constants';
import { booksLoaded, booksLoadingError } from 'containers/Books/actions';
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

export default function* apiData() {
  yield takeLatest(GET_BOOKS, getBooks)
}