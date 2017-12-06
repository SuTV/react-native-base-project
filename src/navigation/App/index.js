import React from 'react'
import { connect } from 'react-redux'

import { addNavigationHelpers, DrawerNavigator } from 'react-navigation'

import SlideMenu from '@scenes/SlideMenu'
import { Routes } from '../routes'
import MainNavigator from '../Main'

const MenuNavigator = DrawerNavigator(
  {
    [Routes.MainNav]: { screen: MainNavigator }
  },
  {
    contentComponent: SlideMenu,    
    initialRouteName: Routes.MainNav,
    drawerPosition: 'left'
  }
)

export { MenuNavigator }

/**
* We treat Navigator as a wrapper for scenes inside.
*/
const Navigator = ({ dispatch, state }) => (
  <MenuNavigator
    navigation={addNavigationHelpers({
      dispatch,
      state: state.navigation,
    })}
  />
)

export default connect(state => ({ state }))(Navigator)