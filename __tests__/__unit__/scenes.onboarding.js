import 'react-native'
import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import Onboarding from '@scenes/Onboarding'
import { moveToMain } from '@scenes/Onboarding/actions'
import reducer from '@scenes/Onboarding/reducer'

const state = {}
const mockStore = configureStore()

describe('Scene Onboarding', () => {
  it('renders correctly', () => {
    expect(shallow(<Onboarding store={mockStore(state)} />)).toMatchSnapshot()
  })
})

describe('Onboarding action', () => {
  it('is dispatched', () => {
    expect(moveToMain()).toMatchSnapshot()
  })
})

describe('Onboarding reducer', () => {
  it('ignores unknown actions', () => {
    expect(reducer(undefined, { type: undefined })).toMatchSnapshot()
  })

  it('reduces async action', () => {
    expect(reducer(undefined, moveToMain())).toMatchSnapshot()
  })
})
