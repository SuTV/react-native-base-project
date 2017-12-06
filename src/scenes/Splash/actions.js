import moment from 'moment'
import AuthService from '../../services/biz/auth'
import { Routes } from '../../navigation/routes'
import { setAppStore, moveToMain, moveToLogin } from '../Base/actions'

const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST'
const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS'
const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE'

export const actions = {
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE
}

export function loadUserRequest() {
  return {
    type: actions.LOAD_USER_REQUEST
  }
}

export function loadUserSuccess() {
  return {
    type: actions.LOAD_USER_SUCCESS
  }
}

export function loadUserFailure(error) {
  return {
    type: actions.LOAD_USER_FAILURE,
    error,
  }
}

export function loadUser(tracker) {
  return (dispatch) => {
    dispatch(loadUserRequest());
    let startTime = moment(new Date());
    AuthService.loadLoggedInUser(tracker, (error, data) => {
      if(error) {
        let errMsg = error.message != undefined ? error.message : '';
        dispatch(loadUserFailure(errMsg));
      } else {
        // set app store
        dispatch(setAppStore(data.tracker, data.accessToken, data.userInfo));

        let endTime = moment(new Date());
        let timeDiff = endTime.diff(startTime);
        let timeout = 2500 > timeDiff ? (2500 - timeDiff) : 0;

        setTimeout(() => {
          dispatch(loadUserSuccess());

          if(data.accessToken != null) {
            dispatch(moveToMain());
          } else {
            dispatch(moveToLogin());
          }
        }, timeout);
      }
    });
  }
}
