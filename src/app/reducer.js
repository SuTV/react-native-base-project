import { getGATracker } from '../services/google-analytics'
import { AppActions } from './actions'

const initialState = {
    tracker: getGATracker(),
    accessToken: null,
    userInfo: null
  }

export default (state = initialState, action) => {
  switch(action.type) {
    case AppActions.APP_TRACKER:
      return Object.assign({}, state, {
        tracker: action.value
      });
    case AppActions.APP_USER_TOKEN:
      return Object.assign({}, state, {
        accessToken: action.value
      });
    case AppActions.APP_USER_INFO:
      return Object.assign({}, state, {
        userInfo: action.value
      });
    case AppActions.APP_STORE:
      if(action.tracker) {
        return Object.assign({}, state, {
          tracker: action.tracker,
          accessToken: action.accessToken,
          userInfo: action.userInfo
        });
      } else {
        return Object.assign({}, state, {
          accessToken: action.accessToken,
          userInfo: action.userInfo
        });
      }
    default:
      return state;
  }
}