import 'react-native'
import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import SettingsScreen from '@scenes/Settings'

const state = {}
const mockStore = configureStore()

describe('SettingsScreen', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SettingsScreen store={mockStore(state)} />)
    expect(wrapper).toMatchSnapshot()
  })
})
