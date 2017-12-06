import { combineReducers } from 'redux'

import navigation from '@navigation/reducer'
import appStore from '@app/reducer'

import main from '@scenes/Main/reducer'
import splash from '@scenes/Splash/reducer'
import login from '@scenes/Login/reducer'

export default combineReducers({
  navigation,
  appStore,
  main,
  splash,
  login,
})
