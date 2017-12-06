import { Routes } from '../../navigation/routes'
import { AppActions } from '@app/actions'
import NavigatorActions from '@navigation/actions'
import UserService from '../../services/biz/user'

export const updateTracker = (tracker) => {
    return {
      type: AppActions.APP_TRACKER,
      value: tracker,
    }
  }
  
  export const setAccessToken = (accessToken) => {
    return {
      type: AppActions.APP_USER_TOKEN,
      value: accessToken,
    }
  }
  
  export const setUserInfo = (userInfo) => {
    return {
      type: AppActions.APP_USER_INFO,
      value: userInfo,
    }
  }

  export const setAppStore = (tracker, accessToken, userInfo) => {
    return {
      type: AppActions.APP_STORE,
      tracker: tracker,
      accessToken: accessToken,
      userInfo: userInfo
    }
  }
  
  export const moveToMain = () => {
    return {
      type: NavigatorActions.MOVE,
      value: Routes.Main,
    }
  }
  
  export const moveToLogin = () => {
    return {
      type: NavigatorActions.MOVE,
      value: Routes.Login,
    }
  }

  export const getShortUserNameTitle = (userInfo) => {
    return UserService.getShortUserNameTitle(userInfo);
  }
  
  export const getUserName = (userInfo) => {
    return UserService.getUserName(userInfo);
  }
  
  export const getUserProfilePicture = (userInfo) => {
    return UserService.getUserProfilePicture(userInfo);
  }

  export const getUserCoverPicture = (userInfo) => {
    return UserService.getUserCoverPicture(userInfo);
  }