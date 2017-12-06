import 'react-native'
import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import Main from '@scenes/Main'
import { defaultAction } from '@scenes/Main/actions'
import reducer from '@scenes/Main/reducer'

const state = {}
const mockStore = configureStore()

describe('Scene Main', () => {
  it('renders correctly', () => {
    expect(shallow(<Main store={mockStore(state)} />)).toMatchSnapshot()
  })
})

describe('Main action', () => {
  it('is dispatched', done => {
    defaultAction()(action => {
      expect(action).toMatchSnapshot()
      done()
    })
  })
})

describe('Main reducer', () => {
  it('ignores unknown actions', () => {
    expect(reducer(undefined, { type: undefined })).toMatchSnapshot()
  })

  it('reduces async action', done => {
    defaultAction()(action => {
      expect(reducer(undefined, action)).toMatchSnapshot()
      done()
    })
  })
})
