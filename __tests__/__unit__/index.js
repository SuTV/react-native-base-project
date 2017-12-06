import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { App } from '../../src/index'

describe('Application', () => {
  it('renders', () => {
    shallow(<App />)
  })
})
