import { StackNavigator } from 'react-navigation'

import Main from '@scenes/Main'
import Add from '@scenes/Add'
import Settings from '@scenes/Settings'
import Splash from '@scenes/Splash'
import LoginNavigator from '@navigation/Login'
import { Routes } from '../routes'

/**
* See https://reactnavigation.org/docs/navigators/stack#RouteConfigs
*/
export default StackNavigator(
  {
    [Routes.Splash]: { screen: Splash },
    [Routes.Login]: {
      screen: LoginNavigator,
      navigationOptions: { header: null },
    },
    [Routes.Main]: { screen: Main },
    [Routes.Add]: { screen: Add },
    [Routes.Settings]: { screen: Settings },
  },
  {
    initialRouteName: Routes.Splash,
  }
)
