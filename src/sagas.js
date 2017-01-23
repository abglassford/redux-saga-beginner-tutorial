import { delay } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { getClickCount, get, increment, decrement } from './routes';

const url = "http://localhost:3000/server"

export function* incrementSaga() {
  const clicks = yield call(increment, url)
  yield put({
    type: 'INCREMENT_CLICKS',
    clicks: clicks
  })
}

export function* decrementSaga() {
  const clicks = yield call(decrement, url)
  yield put({
    type: 'DECREMENT_CLICKS',
    clicks: clicks
  })
}

export function* getData(action) {
  const message = yield call(get, url)
  yield put({
    type: 'SET_MESSAGE',
    message: message
  })
}

export function* getClicks(action) {
  const clicks = yield call(getClickCount, url)
  yield put({
    type: 'GET_CLICK_COUNT',
    clicks: clicks
  })
}

export function* watchIncrement () {
  yield takeEvery('INCREMENT', incrementSaga)
}

export function* watchDecrement () {
  yield takeEvery('DECREMENT', decrementSaga)
}

export function* watchData() {
  yield takeEvery('GET_RANDOM', getData)
}

export function* watchMount() {
  yield takeEvery('GET_CLICKS', getClicks)
}

export default function* rootSaga() {
  yield [
    watchMount(),
    watchIncrement(),
    watchDecrement(),
    watchData()
  ];
};
