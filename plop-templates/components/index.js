import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {View} from 'react-native'

class {{pascalCase name}} extends Component {
  render() {
    const {

    } = this.props
    return <View></View>
  }
}

{{pascalCase name}}.propTypes = {
{{#each props}}
  {{camelCase this.name}}: PropTypes.{{this.type}}{{#if this.required}}.isRequired{{/if}},
{{/each}}
}

export default {{pascalCase name}}
