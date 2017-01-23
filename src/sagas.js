import { delay } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { get, increment } from './routes';

const url = "http://localhost:3000/server"

export function* incrementSaga() {
  const data = yield call(increment, url)
}

export function* getData(action) {
  const message = yield call(get, url)
  yield put({
    type: 'SET_MESSAGE',
    message: message
  })
}

export function* watchIncrement () {
  yield takeEvery('INCREMENT', incrementSaga)
}

export function* watchData() {
  yield takeEvery('GET_RANDOM', getData)
}

export default function* rootSaga() {
  yield [
    watchIncrement(),
    watchData()
  ];
};
