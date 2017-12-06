import 'react-native'
import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import Login from '@scenes/Login'
import { moveToOnboarding } from '@scenes/Login/actions'
import reducer from '@scenes/Login/reducer'

const state = {}
const mockStore = configureStore()

describe('Scene Login', () => {
  it('renders correctly', () => {
    expect(shallow(<Login store={mockStore(state)} />)).toMatchSnapshot()
  })
})

describe('Login action', () => {
  it('is dispatched', () => {
    expect(moveToOnboarding()).toMatchSnapshot()
  })
})

describe('Login reducer', () => {
  it('ignores unknown actions', () => {
    expect(reducer(undefined, { type: undefined })).toMatchSnapshot()
  })

  it('reduces async action', () => {
    expect(reducer(undefined, moveToOnboarding())).toMatchSnapshot()
  })
})
