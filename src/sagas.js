import { call, put, takeEvery } from 'redux-saga/effects';
import { getClickCount, get, increment, decrement } from './routes';

const url = 'http://localhost:3000/server';

export function* incrementSaga() {
  const clicks = yield call(increment, url);
  yield put({
    type: 'INCREMENT_CLICKS',
    clicks,
  });
}

export function* decrementSaga() {
  const clicks = yield call(decrement, url);
  yield put({
    type: 'DECREMENT_CLICKS',
    clicks,
  });
}

/*
Combine increment/decrementSaga?
*/

export function* getData() {
  const message = yield call(get, url);
  yield put({
    type: 'SET_MESSAGE',
    message,
  });
}

export function* getClicks() {
  const clicks = yield call(getClickCount, url);
  yield put({
    type: 'GET_CLICK_COUNT',
    clicks,
  });
}

export function* watchIncrement() {
  yield takeEvery('INCREMENT', incrementSaga);
}

export function* watchDecrement() {
  yield takeEvery('DECREMENT', decrementSaga);
}

export function* watchData() {
  yield takeEvery('GET_RANDOM', getData);
}

export function* watchMount() {
  yield takeEvery('GET_CLICKS', getClicks);
}

export default function* rootSaga() {
  yield [
    watchMount(),
    watchIncrement(),
    watchDecrement(),
    watchData(),
  ];
}
