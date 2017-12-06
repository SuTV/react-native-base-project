import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import {{pascalCase name}} from '.'

describe('Component {{pascalCase name}}', () => {
  it('renders correctly', () => {
    expect(
      shallow(<{{pascalCase name}}
        {{#each props}}
          {{camelCase this.name}}=""
        {{/each}}
      />)
    ).toMatchSnapshot()
  })
})
