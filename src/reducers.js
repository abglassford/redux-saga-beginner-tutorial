import axios from 'axios'

const initialState = {
  clicks: 0
}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      console.log(state);
      return Object.assign({}, state, {clicks: state.clicks + 1})
    case 'DECREMENT':
      console.log(state);
      return Object.assign({}, state, {clicks: state.clicks - 1})
    case 'SET_COUNT':
      return state
    default:
      return state
  }
}
