import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

class Cell extends Component {
  handlePress = () => {
    this.props.onPress(this.props.id)
  }

  render() {
    return <View>{this.props.title}</View>
  }
}

Cell.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
}

export default Cell
