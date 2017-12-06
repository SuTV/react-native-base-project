import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import Cell from '.'

describe('Reusable Cell', () => {
  it('renders correctly', () => {
    expect(
      shallow(<Cell id="cell" title="Cell" onPress={jest.fn()} />)
    ).toMatchSnapshot()
  })
})
