import AuthService from '../../services/biz/auth'
import { setAppStore, setUserInfo, moveToLogin } from '../Base/actions'

export const logOut = (appStore, type) => {
  return (dispatch) => {
    let authService = appStore.serviceFactory.getService(AuthService.name);

    // set user info to avoid realm crash
    dispatch(setUserInfo(null));

    authService.logOut(appStore.tracker, type, appStore.userInfo.userId, (error, data) => {
      // set app store
      dispatch(setAppStore(data.tracker, null, null));
      
      // move to login screen
      dispatch(moveToLogin());
    });
  }
}