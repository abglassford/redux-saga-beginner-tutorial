import "babel-polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import Counter from './src/Counter';
import reducer from './src/reducers';
import rootSaga  from './src/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({type});

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrementAsync={() => action('INCREMENT_ASYNC')}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      getData={() => action('GET_RANDOM')}
    />,
  document.getElementById('root')
  )
};

render();
store.subscribe(render);
