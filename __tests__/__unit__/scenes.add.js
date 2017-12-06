import 'react-native'
import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import AddScreen from '@scenes/Add'

const state = {}
const mockStore = configureStore()

describe('AddScreen', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<AddScreen store={mockStore(state)} />)
    expect(wrapper).toMatchSnapshot()
  })
})
