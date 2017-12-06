import AuthService from '../../services/biz/auth'
import { setAppStore, moveToLogin } from '../Base/actions'

const DEFAULT_ACTION = 'DEFAULT_ACTION'

export const actions = {
  DEFAULT_ACTION,
}

export const defaultAction = () => {
  return async dispatch => {
    dispatch({
      type: DEFAULT_ACTION,
      value: [],
    })
  }
}

export const logOut = (tracker, type) => {
  return (dispatch) => {
    AuthService.logOut(tracker, type, (error, data) => {
      // set app store
      dispatch(setAppStore(data.tracker, null, null));
      
      // move to login screen
      dispatch(moveToLogin());
    });
  }
}