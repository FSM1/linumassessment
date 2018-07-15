import { call, put, takeLatest, take, race, fork } from 'redux-saga/effects';
import { START_POLL_BOOKS, STOP_POLL_BOOKS } from 'models/books/constants'
import { booksLoaded, booksLoadingError, getBooks } from 'models/books/actions';
import { fetchBooks } from 'utils/api';
import { GET_BOOKS } from './constants';

const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* callFetchBooks() {
  try {
    const books = yield call(fetchBooks);
    yield put(booksLoaded(books));
  } catch (err) {
    yield put(booksLoadingError(err));
  }
}

export function* pollSaga() {
  while (true) {
    yield put(getBooks());
    yield delay(5000);
  }
}

export function* watchGetBooks() {
  yield takeLatest(GET_BOOKS, callFetchBooks)
}

export function* watchPollSaga() {
  yield take(START_POLL_BOOKS);
  yield race([
    call(pollSaga),
    take(STOP_POLL_BOOKS)
  ]);
}

export default function* books() {
  yield [
    fork(watchPollSaga),
    fork(watchGetBooks),
  ];
}