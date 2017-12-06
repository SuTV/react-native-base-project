import 'react-native'
import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import {{pascalCase name}} from '@scenes/{{pascalCase name}}'
import { defaultAction } from '@scenes/{{pascalCase name}}/actions'
import reducer from '@scenes/{{pascalCase name}}/reducer'

const state = {}
const mockStore = configureStore()

describe('Scene {{pascalCase name}}', () => {
  it('renders correctly', () => {
    expect(shallow(<{{pascalCase name}} store={mockStore(state)} />))
    .toMatchSnapshot()
  })
})

describe('{{pascalCase name}} action', () => {
  it('is dispatched', done => {
    defaultAction()(action => {
      expect(action).toMatchSnapshot()
      done()
    })
  })
})

describe('{{pascalCase name}} reducer', () => {
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
