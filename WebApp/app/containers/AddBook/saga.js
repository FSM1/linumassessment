import { call, put, takeLatest } from 'redux-saga/effects';
import { ADD_BOOK } from './constants';
import { addBookSuccess, addBookError } from './actions';
import { addBook } from 'utils/api';

// Individual exports for testing
export function* postBook(action) {
  try {
    debugger;
    const newBook = yield call(addBook, action.payload.book)
    yield put(addBookSuccess(newBook));
  } catch (err) {
    yield put(addBookError(err));
  }
}

export default function* watchAddBook() {
  yield takeLatest(ADD_BOOK, postBook)
}