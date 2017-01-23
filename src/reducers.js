const initialState = {
  clicks: 0,
  message: ''
}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT_CLICKS':
      console.log(action);
      return Object.assign({}, state, {clicks: action.clicks})
    case 'DECREMENT':
      return Object.assign({}, state, {clicks: state.clicks - 1})
    case 'SET_MESSAGE':
      return Object.assign({}, state, {message: action.message})
    case 'GET_CLICK_COUNT':
      return Object.assign({}, state, {clicks: action.clicks})
    default:
      return state
  }
}
