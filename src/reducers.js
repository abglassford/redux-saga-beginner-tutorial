const initialState = {
  clicks: 0,
  message: ''
}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, {clicks: state.clicks + 1})
    case 'DECREMENT':
      return Object.assign({}, state, {clicks: state.clicks - 1})
    case 'SET_MESSAGE':
      return Object.assign({}, state, {message: action.message})
    default:
      return state
  }
}
