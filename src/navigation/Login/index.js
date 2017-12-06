import { StackNavigator } from 'react-navigation'

import Login from '@scenes/Login'
import Onboarding from '@scenes/Onboarding'
import { Routes } from '../routes'

/**
 * This is a nested navigator, so we just pass it's config
 */
export default StackNavigator({
  [Routes.Login]: { screen: Login },
  [Routes.Onboarding]: { screen: Onboarding },
})
