const initialState = {
  clicks: 0,
  message: '',
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT_CLICKS':
      return Object.assign({}, state, { clicks: action.clicks });
    case 'DECREMENT_CLICKS':
      return Object.assign({}, state, { clicks: action.clicks });
    case 'SET_MESSAGE':
      return Object.assign({}, state, { message: action.message });
    case 'GET_CLICK_COUNT':
      return Object.assign({}, state, { clicks: action.clicks });
    default:
      return state;
  }
}
