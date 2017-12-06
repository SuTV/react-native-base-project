import { actions } from './actions'

const initialState = {
  isAuthenticated: false,
  isFetching: false,
  errorMessage: '',
}

export default (state = initialState, action) => {
  switch(action.type) {
    case actions.LOAD_USER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
      });
    case actions.LOAD_USER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        failure: false,
      });
    case actions.LOAD_USER_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        failure: true,
        errorMessage: action.error,
      });
    default:
      return state;
  }
}