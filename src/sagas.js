import { delay } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { get } from './routes';

const url = "http://localhost:3000/server"

export function* incrementAsync() {
  yield call(delay, 1000)
  yield put({ type: 'INCREMENT' })
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* getData(action) {
  const message = yield call(get, url)
  console.log(message);
  yield put({
    type: 'SET_MESSAGE',
    message: message
  })
}

export function* watchData() {
  yield takeEvery('GET_RANDOM', getData)
}

export default function* rootSaga() {
  yield [
    watchIncrementAsync(),
    watchData()
  ];
};
