import { call, put, takeLatest } from 'redux-saga/effects';
import { ADD_BOOK } from './constants';
import { addBookSuccess, addBookError } from './actions';
import request from 'utils/request';
import api from 'utils/api';

// Individual exports for testing
export function* addBook(payload) {
  try {
    const newBook = yield call(api.addBook, payload)
    yield put(addBookSuccess(newBook));
  } catch (err) {
    yield put(booksLoadingError(err));
  }
}

export default function* watchAddBook(payload) {
  yield takeLatest(ADD_BOOK, addBook, payload)
}