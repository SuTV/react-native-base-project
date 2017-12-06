import 'react-native'
import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'

import { LoginNavigator, Routes as LoginRoutes } from '@navigation/Login'
import Navigator, {
  MainNavigator,
  Routes as MainRoutes,
} from '@navigation/App'

import reducer from '@navigation/reducer'
import actions from '@navigation/actions'

const state = {
  navigation: {
    index: 0,
    routes: [{ routeName: MainRoutes.Splash }],
  },
}
const mockStore = configureStore()

describe('Navigators', () => {
  it('render correctly', () => {
    const wrapper = shallow(<Navigator store={mockStore(state)} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('are configured correctly', () => {
    expect(LoginNavigator).toMatchSnapshot()
    expect(MainNavigator).toMatchSnapshot()
  })
})

describe('Navigation reducer', () => {
  it('reduces initial state', () => {
    const initialState = reducer(undefined, { type: undefined })
    expect(initialState.index).toBe(0)
    expect(initialState.routes[0].routeName).toBe(MainRoutes.Splash)
  })

  it('reduces first depth nested navigation', () => {
    Object.values(MainRoutes).map(route => {
      const newState = reducer(undefined, {
        type: actions.MOVE,
        value: route,
      })
      expect(newState.index).toBe(1)
      expect(newState.routes[newState.index].routeName).toBe(route)
    })
  })

  it('reduces second depth nested navigation', () => {
    Object.values(MainRoutes).map(route => {
      const newState = reducer(
        reducer(undefined, {
          type: actions.MOVE,
          value: MainRoutes.Main,
        }),
        {
          type: actions.MOVE,
          value: route,
        }
      )
      expect(newState.index).toBe(2)
      expect(newState.routes[newState.index].routeName).toBe(route)
    })
  })
})
