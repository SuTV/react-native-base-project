import 'react-native'
import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import Splash from '@scenes/Splash'
import { moveToMain, moveToLogin } from '@scenes/Splash/actions'
import reducer from '@scenes/Splash/reducer'

const state = {}
const mockStore = configureStore()

describe('Scene Splash', () => {
  it('renders correctly', () => {
    expect(shallow(<Splash store={mockStore(state)} />)).toMatchSnapshot()
  })
})

describe('Splash actions', () => {
  it('are dispatched', done => {
    moveToMain()(action => {
      expect(action).toMatchSnapshot()
      done()
    })
    moveToLogin()(action => {
      expect(action).toMatchSnapshot()
      done()
    })
  })
})

describe('Splash reducer', () => {
  it('ignores unknown actions', () => {
    expect(reducer(undefined, { type: undefined })).toMatchSnapshot()
  })
})
