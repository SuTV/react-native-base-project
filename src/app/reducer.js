import { getGATracker } from '../services/google-analytics'
import { AppActions } from './actions'
import ServiceFactory from '../services/factory';

const initialState = {
    tracker: getGATracker(),
    accessToken: null,
    userInfo: null,
    realm: null,
    serviceFactory: null
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
    case AppActions.APP_REALM:
      return Object.assign({}, state, {
        realm: action.value,
        serviceFactory: new ServiceFactory(action.value)
      });
    default:
      return state;
  }
}