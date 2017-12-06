import AuthService from '../../services/biz/auth'
import { Routes } from '../../navigation/routes'
import { setAppStore, moveToMain } from '../Base/actions'

const LOGIN_REQUEST = 'LOGIN_REQUEST'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAILURE = 'LOGIN_FAILURE'
const LOGIN_RESET = 'LOGIN_RESET'

export const actions = {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_RESET
}

export function loginRequest(accountType) {
  return {
    type: actions.LOGIN_REQUEST,
    accountType: accountType
  }
}

export function loginSuccess(token) {
  return {
    type: actions.LOGIN_SUCCESS,
    token
  }
}

export function loginFailure(error) {
  return {
    type: actions.LOGIN_FAILURE,
    error
  }
}

export function logIn(tracker, type) {
  return (dispatch) => {
    dispatch(loginRequest(type));

    AuthService.logIn(tracker, type, (error, data, isCancelled) => {
      if(error) {
        dispatch(loginFailure(error.message));
      } else {
        // set app store
        dispatch(setAppStore(data.tracker, data.accessToken, data.userInfo));

        if(data.userInfo != null && (!isCancelled || isCancelled == undefined)) {
          dispatch(loginSuccess(data.accessToken));

          // verify onboarding status to redirect

          dispatch(moveToMain());
        } else {
          dispatch(loginFailure());
        }
      }
    });
  }
}
