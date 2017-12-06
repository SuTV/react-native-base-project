import { actions } from './actions'
import { AccountTypes } from '../../services/biz/accounts'

const initialState = {
  isAuthenticated: false,
  isFetching: false,
  type: AccountTypes.FACEBOOK,
  token: '',
  failure: false,
  errorMessage: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case actions.LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        type: action.accountType,
        failure: false
      });
    case actions.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        token: action.token,
        failure: false
      });
    case actions.LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        failure: true,
        errorMessage: action.error
      });

    case actions.LOGIN_RESET:
      return Object.assign({}, state, initialState);
    default:
      return state;
  }
}
